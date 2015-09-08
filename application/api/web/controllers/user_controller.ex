defmodule Api.UserController do
  use Api.Web, :controller
  alias Api.User
  alias Api.GroupUser
  alias Api.InvitedUser
  require Logger

  def create(conn, %{"user" => user_params}) do
    changeset = User.changeset(%User{}, user_params)

    if changeset.valid? do
      new_user = Repo.insert(changeset)

      invUsers = getInvitedUsers(new_user.email)
      Enum.each(invUsers, &createGroupUser(&1.group_id, new_user.id))

      conn
      |> put_flash(:info, "User created successfully.")
      conn = put_session(conn, :user, new_user)
      render conn, user: new_user
    else
      render conn, user: %User{}
    end
  end

  defp getInvitedUsers(email) do
    query = from u in InvitedUser,
               where: u.email == ^email,
               select: u
    query |> Repo.all
  end

  defp createGroupUser(group_id, user_id) do
    changeset = GroupUser.changeset(%GroupUser{}, %{group_id: group_id, user_id: user_id})
    if changeset.valid? do
      Repo.insert(changeset)
    end
  end

end
