class AddColumnToUser < ActiveRecord::Migration
  def change
    add_column :users, :description, :text
    add_column :users, :photo_url, :string
    add_column :users, :profile_views, :integer, default: 0
  end
end
