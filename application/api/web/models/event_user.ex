defmodule Api.EventUser do
  use Api.Web, :model
  import Ecto.Query

  schema "event_user" do
    belongs_to :user, Api.User, foreign_key: :user_id
    belongs_to :event, Api.Event, foreign_key: :event_id

    timestamps
  end

  @required_fields ~w(event_id user_id)
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
