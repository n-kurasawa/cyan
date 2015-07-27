defmodule Api.User do
  use Api.Web, :model
  import Ecto.Query

  schema "users" do
    field :account_id, :string
    field :password, :string
    field :name, :string
    field :email, :string

    has_many :events, Api.Event
    has_many :event_user, Api.EventUser

    timestamps
  end

  @required_fields ~w(account_id password name)
  @optional_fields ~w(email)

  @doc """
  Creates a changeset based on the `model` and `params`.

  If `params` are nil, an invalid changeset is returned
  with no validation performed.
  """
  def changeset(model, params \\ :empty) do
    model
    |> cast(params, @required_fields, @optional_fields)
  end
end
