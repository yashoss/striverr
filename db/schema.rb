ActiveRecord::Schema.define(version: 20160909000436) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "carts", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "gig_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "carts", ["gig_id"], name: "index_carts_on_gig_id", using: :btree
  add_index "carts", ["user_id"], name: "index_carts_on_user_id", using: :btree

  create_table "gigs", force: :cascade do |t|
    t.integer  "user_id",                   null: false
    t.string   "title",                     null: false
    t.string   "category",                  null: false
    t.text     "description",               null: false
    t.string   "photo_url"
    t.integer  "delivery_time",             null: false
    t.integer  "revisions",                 null: false
    t.float    "price",                     null: false
    t.integer  "gig_views",     default: 0
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
  end

  add_index "gigs", ["gig_views"], name: "index_gigs_on_gig_views", using: :btree
  add_index "gigs", ["user_id"], name: "index_gigs_on_user_id", using: :btree

  create_table "orders", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "gig_id",     null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.integer  "author_id",                null: false
    t.integer  "gig_id",                   null: false
    t.text     "body",                     null: false
    t.float    "rating",     default: 0.0
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
  end

  add_index "reviews", ["author_id"], name: "index_reviews_on_author_id", using: :btree
  add_index "reviews", ["gig_id"], name: "index_reviews_on_gig_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",                    null: false
    t.string   "email",                       null: false
    t.string   "password_digest",             null: false
    t.string   "session_token",               null: false
    t.integer  "views"
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.text     "description"
    t.string   "photo_url"
    t.integer  "profile_views",   default: 0
  end

end
