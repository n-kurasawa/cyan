defmodule Api.InvitedUsersTest do
  use Api.ModelCase

  alias Api.InvitedUsers

  @valid_attrs %{email: "some content", group_id: 42}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = InvitedUsers.changeset(%InvitedUsers{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = InvitedUsers.changeset(%InvitedUsers{}, @invalid_attrs)
    refute changeset.valid?
  end
end
