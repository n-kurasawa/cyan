defmodule Api.GroupTest do
  use Api.ModelCase

  alias Api.Group

  @valid_attrs %{description: "some content", name: "some content", owner_id: 42}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Group.changeset(%Group{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Group.changeset(%Group{}, @invalid_attrs)
    refute changeset.valid?
  end
end
