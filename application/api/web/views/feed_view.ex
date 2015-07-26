defmodule Api.FeedView do
  use Api.Web, :view
  require Logger

  def render("index.json", %{feeds: feeds}) do
    %{feeds: feeds}
  end

  def render("create.json", %{feed: feed, user: user}) do
    %{feed: feed, user: user}
  end

end
