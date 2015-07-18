defmodule Api.AuthController do
  use Api.Web, :controller
  alias Api.User
  plug :action

  def login(conn, %{"auth" => %{"loginId" => loginId, "pass" => pass}}) do
    query = from u in User,
               where: u.login_id == ^loginId,
               where: u.pass == ^pass,
               select: u
    user = Repo.one(query)

    if user do
      conn = conn |> fetch_session |> put_session(:user, user)
    end
    render conn, user: user
  end
end
