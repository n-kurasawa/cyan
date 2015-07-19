defmodule Api.User do
  use Api.Web, :model
  import Ecto.Query

  schema "users" do
    field :login_id, :string
    field :pass, :string
    field :name, :string
    field :mail, :string

    has_many :events, Apu.Event

    timestamps
  end

  @required_fields ~w(login_id pass name mail)
  @optional_fields ~w()

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
