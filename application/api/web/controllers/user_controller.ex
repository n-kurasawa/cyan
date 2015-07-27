defmodule Api.UserController do
  use Api.Web, :controller
  alias Api.User
  require Logger
  plug :action

  def create(conn, %{"user" => user_params}) do
    changeset = User.changeset(%User{}, user_params)

    if changeset.valid? do
      new_user = Repo.insert(changeset)

      conn
      |> put_flash(:info, "User created successfully.")
      conn = put_session(conn, :user, new_user)
      render conn, user: new_user
    else
      render conn, user: %User{}
    end
  end

end
