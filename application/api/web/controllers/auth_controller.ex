defmodule Api.AuthController do
  use Api.Web, :controller
  alias Api.User
  require Logger
  plug :action

  def login(conn, %{"auth" => %{"loginId" => loginId, "pass" => pass}}) do
    query = from u in User,
               where: u.login_id == ^loginId,
               where: u.pass == ^pass,
               select: u
    user = Repo.one(query)

    if user do
      conn = put_session(conn, :user, user)
    end
    render conn, user: user
  end

  def loginUser(conn, _params) do
    user = get_session(conn, :user)
    render conn, user: user
  end

  def check(conn, _params) do
    user = get_session(conn, :user)
    render conn, isLogin: !!user
  end

end
