defmodule Api.EventController do
  use Api.Web, :controller
  alias Api.Event
  require Logger
  plug :scrub_params, "event" when action in [:create, :update]

  plug :action

  def index(conn, _params) do
    # user = get_session(conn, :user)
    # Logger.debug user.id
    events = Repo.all(Event)
    render conn, events: events
  end

  def create(conn, %{"event" => event_params}) do
    event = Map.put(event_params, "user_id", 1)
    changeset = Event.changeset(%Event{}, event)
    if changeset.valid? do
      Repo.insert(changeset)
      render conn, event: event_params
    else
      render conn, event: %Event{}
    end
  end
end
