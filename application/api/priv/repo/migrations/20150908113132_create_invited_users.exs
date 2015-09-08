defmodule Api.Repo.Migrations.CreateInvitedUsers do
  use Ecto.Migration

  def change do
    create table(:invited_users) do
      add :email, :string
      add :group_id, :integer

      timestamps
    end

  end
end
