defmodule Api.FeedView do
  use Api.Web, :view

  def render("index.json", %{feeds: feeds}) do
    %{feeds: feeds}
  end

  def render("create.json", %{feed: feed}) do
    %{feed: feed}
  end

end
