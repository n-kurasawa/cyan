defmodule Api.EventTest do
  use Api.ModelCase

  alias Api.Event

  @valid_attrs %{date: %{day: 17, month: 4, year: 2010}, max: 42, title: "some content", user_id: 42}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Event.changeset(%Event{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Event.changeset(%Event{}, @invalid_attrs)
    refute changeset.valid?
  end
end
