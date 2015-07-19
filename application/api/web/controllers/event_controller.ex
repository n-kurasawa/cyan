defmodule Api.EventController do
  use Api.Web, :controller
  alias Api.Event
  alias Api.User
  alias Api.EventUser

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
      new_event = Repo.insert(changeset)

      conn
      |> put_flash(:info, "User created successfully.")

      render conn, event: Map.put(new_event, "user", user)
    else
      render conn, event: %Event{}
    end
  end

  def participants(conn, %{"event_id" => event_id}) do
    query = from u in User,
              join: eu in EventUser, on: eu.user_id == u.id,
               where: eu.event_id == ^event_id,
               select: u
    users = Repo.all(query)
    render conn, users: users
  end

  def join(conn, %{"event_id" => event_id}) do
    user = get_session(conn, :user)
    changeset = EventUser.changeset(%EventUser{}, %{event_id: event_id, user_id: user.id})
    if changeset.valid? do
      eventUser = Repo.insert(changeset)

      conn
      |> put_flash(:info, "EventUser created successfully.")

      event = Event |> Repo.get(event_id) |> Repo.preload [:user]

      render conn, user: user
    else
      render conn, user: %User{}
    end
  end

  def cancel(conn, %{"event_id" => event_id}) do
    user = get_session(conn, :user)

    query = from eu in EventUser,
               where: eu.event_id == ^event_id,
               where: eu.user_id == ^user.id
    Repo.delete_all(query)

    render conn, user: user
  end
end
