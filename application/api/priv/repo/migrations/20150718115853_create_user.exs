defmodule Api.Repo.Migrations.CreateUser do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :account_id, :string
      add :password, :string
      add :name, :string
      add :email, :string

      timestamps
    end

  end
end
