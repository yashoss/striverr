class CreateCarts < ActiveRecord::Migration
  def change
    create_table :carts do |t|
      t.integer :user_id, null: false
      t.integer :gig_id
      t.timestamps null: false
    end

    add_index :carts, :user_id
    add_index :carts, :gig_id
  end
end
