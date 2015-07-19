defmodule Api.EventController do
  use Api.Web, :controller
  alias Api.Event
  alias Api.User
  require Logger
  plug :scrub_params, "event" when action in [:create, :update]

  plug :action

  def index(conn, _params) do
    events = Event |> Repo.all() |> Repo.preload [:user]
    render conn, events: events
  end

  def create(conn, %{"event" => event_params}) do
    user = get_session(conn, :user)

    event = Map.put(event_params, "user_id", user.id)
    changeset = Event.changeset(%Event{}, event)
    if changeset.valid? do
      Repo.insert(changeset)

      conn
      |> put_flash(:info, "User created successfully.")

      render conn, event: event_params
    else
      render conn, event: %Event{}
    end
  end
end
