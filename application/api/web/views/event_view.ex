defmodule Api.EventView do
  use Api.Web, :view

  def render("index.json", %{events: events}) do
    %{events: events}
  end

  def render("create.json", %{event: event}) do
    %{event: event}
  end

  def render("participants.json", %{users: users}) do
    %{users: users}
  end

  def render("join.json", %{user: user}) do
    %{user: user}
  end

  def render("cancel.json", %{user: user}) do
    %{user: user}
  end
end
