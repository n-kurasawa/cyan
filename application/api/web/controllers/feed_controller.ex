defmodule Api.FeedController do
  use Api.Web, :controller
  alias Api.Event
  alias Api.User
  alias Api.Feed

  require Logger
  plug :scrub_params, "feed" when action in [:create, :update]

  plug :action

  def index(conn, %{"event_id" => event_id}) do
    query = from f in Feed,
               where: f.event_id == ^event_id,
               select: f

    feeds = Repo.all(query) |> Repo.preload [:user, :event]
    render conn, feeds: feeds
  end

  def create(conn, %{"feed" => feed_params, "event_id" => event_id}) do
    user = get_session(conn, :user)

    feed = %{content: feed_params, event_id: event_id,  user_id: user.id}

    changeset = Feed.changeset(%Feed{}, feed)
    if changeset.valid? do
      new_feed = Repo.insert(changeset)

      conn
      |> put_flash(:info, "User created successfully.")

      render conn, feed: new_feed, user: user
    else
      render conn, feed: %Feed{}, user: %User{}
    end
  end
end
