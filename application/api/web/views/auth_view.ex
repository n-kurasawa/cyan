defmodule Api.AuthView do
  use Api.Web, :view

  def render("login.json", %{user: user}) do
    %{user: user}
  end

  def render("logout.json", %{logout: succes}) do
    %{logout: succes}
  end

  def render("loginUser.json", %{user: user}) do
    %{user: user}
  end

  def render("check.json", %{isLogin: isLogin}) do
    %{isLogin: isLogin}
  end
end
