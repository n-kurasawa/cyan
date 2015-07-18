defmodule Api.EventView do
  use Api.Web, :view

  def render("index.json", %{events: events}) do
    %{events: events}
  end

  def render("create.json", %{event: event}) do
    %{event: event}
  end
end
