defmodule Api.EventUserTest do
  use Api.ModelCase

  alias Api.EventUser

  @valid_attrs %{event_id: 42, user_id: 42}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = EventUser.changeset(%EventUser{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = EventUser.changeset(%EventUser{}, @invalid_attrs)
    refute changeset.valid?
  end
end
