class CreateGigs < ActiveRecord::Migration
  def change
    create_table :gigs do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.string :category, null: false
      t.text :description, null: false
      t.string :photo_url
      t.integer :delivery_time, null: false
      t.integer :revisions, null: false
      t.float :price, null: false
      t.integer :gig_views
      t.timestamps null: false
    end

    add_index :gigs, :user_id
    add_index :gigs, :gig_views
  end
end
