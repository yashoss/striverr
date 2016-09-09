class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :author_id, null: false
      t.integer :gig_id, null: false
      t.text :body, null: false
      t.float :rating, default: 0
      t.timestamps null: false
    end

    add_index :reviews, :author_id
    add_index :reviews, :gig_id
  end
end
