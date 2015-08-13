defmodule Api.Repo.Migrations.CreateGroupUser do
  use Ecto.Migration

  def change do
    create table(:group_user) do
      add :group_id, :integer
      add :user_id, :integer

      timestamps
    end

  end
end
