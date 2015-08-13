defmodule Api.GroupController do
  use Api.Web, :controller
  alias Api.Group
  alias Api.User
  alias Api.GroupUser

  require Logger
  plug :scrub_params, "group" when action in [:create, :update]

  def index(conn, _params) do
    groups = Group |> Repo.all() |> Repo.preload [:owner]
    render conn, groups: groups
  end

  def create(conn, %{"group" => group_params}) do
    user = get_session(conn, :user)

    group = Map.put(group_params, "owner_id", user.id)
    changeset = Group.changeset(%Group{}, group)
    if changeset.valid? do
      new_group = Repo.insert(changeset)
      createGroupUser(new_group.id, user.id)

      conn
      |> put_flash(:info, "Group created successfully.")

      render conn, group: %{new_group | owner: user}
    else
      render conn, group: %Group{}
    end
  end

  def createGroupUser(group_id, user_id) do
    changeset = GroupUser.changeset(%GroupUser{}, %{group_id: group_id, user_id: user_id})
    if changeset.valid? do
      Repo.insert(changeset)
    end
  end

end
