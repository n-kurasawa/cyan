defmodule Api.GroupView do
  use Api.Web, :view

  def render("index.json", %{groups: groups}) do
    %{groups: groups}
  end

  def render("create.json", %{group: group}) do
    %{group: group}
  end

  def render("invite.json", %{group_id: group_id}) do
    %{group_id: group_id}
  end
end
