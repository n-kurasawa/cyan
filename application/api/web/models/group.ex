defmodule Api.Group do
  use Api.Web, :model

  schema "groups" do
    field :name, :string
    field :description, :string

    timestamps

    belongs_to :owner, Api.User, foreign_key: :owner_id
    has_many :group_user, Api.GroupUser
    has_many :users, through: [:group_user, :user]
  end

  @required_fields ~w(name owner_id)
  @optional_fields ~w(description)

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
