defmodule Api.Repo.Migrations.CreateGroup do
  use Ecto.Migration

  def change do
    create table(:groups) do
      add :name, :string
      add :owner_id, :integer
      add :description, :string

      timestamps
    end

  end
end
