# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_01_15_232315) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "people", force: :cascade do |t|
    t.string "birth_year", null: false
    t.datetime "created", null: false
    t.datetime "edited", null: false
    t.string "eye_color", null: false
    t.string "gender", null: false
    t.string "hair_color", null: false
    t.string "height", null: false
    t.string "homeworld", null: false
    t.string "mass", null: false
    t.string "name", null: false
    t.string "skin_color", null: false
    t.string "url", null: false
    t.string "vehicles", null: false
    t.text "films", null: false, array: true
    t.text "species", null: false, array: true
    t.text "starships", null: false, array: true
  end

end
