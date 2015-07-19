defmodule Api.Event do
  use Api.Web, :model
  import Ecto.Query

  schema "events" do
    field :title, :string
    field :date, Ecto.Date
    field :max, :integer
    field :description, :string
    field :document_url, :string
    field :place, :string

    belongs_to :user, Api.User, foreign_key: :user_id
    has_many :event_user, Apu.EventUser

    timestamps
  end

  @required_fields ~w(title user_id date)
  @optional_fields ~w(max description document_url place)

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
