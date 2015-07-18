defmodule Api.Repo.Migrations.CreateUser do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :login_id, :string
      add :pass, :string
      add :name, :string
      add :mail, :string

      timestamps
    end

  end
end
