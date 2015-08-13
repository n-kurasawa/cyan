defmodule Api.AuthController do
  use Api.Web, :controller
  alias Api.User
  require Logger

  def login(conn, %{"auth" => %{"account_id" => account_id, "password" => password}}) do
    query = from u in User,
               where: u.account_id == ^account_id,
               where: u.password == ^password,
               select: u
    user = Repo.one(query)

    if user do
      conn = put_session(conn, :user, user)
    end
    render conn, user: user
  end

  def logout(conn, _params) do
    conn = put_session(conn, :user, nil)
    render conn, logout: true
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
