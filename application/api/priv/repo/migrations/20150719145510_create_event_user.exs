defmodule Api.Repo.Migrations.CreateEventUser do
  use Ecto.Migration

  def change do
    create table(:event_user) do
      add :event_id, :integer
      add :user_id, :integer

      timestamps
    end

  end
end
