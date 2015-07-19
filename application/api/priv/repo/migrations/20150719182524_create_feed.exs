defmodule Api.Repo.Migrations.CreateFeed do
  use Ecto.Migration

  def change do
    create table(:feeds) do
      add :content, :string
      add :event_id, :integer
      add :user_id, :integer

      timestamps
    end

  end
end
