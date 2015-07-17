defmodule Api.EventView do
  use Api.Web, :view

  def render("index.json", %{events: events}) do
    %{events: events}
  end
end
