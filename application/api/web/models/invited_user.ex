defmodule Api.InvitedUser do
  use Api.Web, :model

  schema "invited_users" do
    field :email, :string
    field :group_id, :integer

    timestamps
  end

  @required_fields ~w(email group_id)
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
