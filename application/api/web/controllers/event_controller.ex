defmodule Api.EventController do
  use Api.Web, :controller

  plug :action

  def index(conn, _params) do
    render conn, events: %{event: "event"}
  end
end
