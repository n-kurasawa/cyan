defmodule Api.Repo.Migrations.CreateEvent do
  use Ecto.Migration

  def change do
    create table(:events) do
      add :title, :string
      add :user_id, :integer
      add :date, :date
      add :max, :integer

      timestamps
    end

  end
end
