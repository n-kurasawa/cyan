defmodule Api.UserView do
  use Api.Web, :view

  def render("create.json", %{user: user}) do
    %{user: user}
  end
end
