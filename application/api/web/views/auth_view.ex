defmodule Api.AuthView do
  use Api.Web, :view

  def render("login.json", %{user: user}) do
    %{user: user}
  end
end
