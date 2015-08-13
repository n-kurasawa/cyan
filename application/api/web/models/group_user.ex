defmodule Api.GroupUser do
  use Api.Web, :model

  schema "group_user" do
    belongs_to :group, Api.Group, foreign_key: :group_id
    belongs_to :user, Api.User, foreign_key: :user_id
    timestamps
  end

  @required_fields ~w(group_id user_id)
  @optional_fields ~w()

  @doc """
  Creates a changeset based on the `model` and `params`.

  If no params are provided, an invalid changeset is returned
  with no validation performed.
  """
  def changeset(model, params \\ :empty) do
    model
    |> cast(params, @required_fields, @optional_fields)
  end
end
