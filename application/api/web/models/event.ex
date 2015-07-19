defmodule Api.Event do
  use Api.Web, :model
  import Ecto.Query

  schema "events" do
    field :title, :string
    field :date, Ecto.Date
    field :max, :integer

    belongs_to :user, Api.User, foreign_key: :user_id

    timestamps
  end

  @required_fields ~w(title user_id date)
  @optional_fields ~w(max)

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
