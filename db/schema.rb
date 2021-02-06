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

ActiveRecord::Schema.define(version: 2021_02_06_160858) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "films", force: :cascade do |t|
    t.integer "episode_id", null: false
    t.string "created", null: false
    t.string "edited", null: false
    t.string "director", null: false
    t.string "opening_crawl", null: false
    t.string "producer", null: false
    t.string "release_date", null: false
    t.string "title", null: false
    t.string "url", null: false
    t.text "characters", null: false, array: true
    t.text "planets", null: false, array: true
    t.text "starships", null: false, array: true
    t.text "species", null: false, array: true
    t.text "vehicles", null: false, array: true
  end

  create_table "people", force: :cascade do |t|
    t.string "birth_year", null: false
    t.string "created", null: false
    t.string "edited", null: false
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

  create_table "planets", force: :cascade do |t|
    t.integer "climate"
    t.string "created", null: false
    t.string "edited", null: false
    t.string "diameter", null: false
    t.string "gravity", null: false
    t.string "name", null: false
    t.string "orbital_period", null: false
    t.string "rotation_period", null: false
    t.string "population", null: false
    t.string "terrain", null: false
    t.string "surface_water", null: false
    t.string "url", null: false
    t.text "residents", null: false, array: true
    t.text "films", null: false, array: true
  end

  create_table "species", force: :cascade do |t|
    t.string "name", null: false
    t.string "classification", null: false
    t.string "designation", null: false
    t.string "average_height", null: false
    t.string "average_lifespan", null: false
    t.string "hair_colors", null: false
    t.string "skin_colors", null: false
    t.string "eye_colors", null: false
    t.string "homeworld"
    t.string "language", null: false
    t.string "created", null: false
    t.string "edited", null: false
    t.string "url", null: false
    t.text "people", null: false, array: true
    t.text "films", null: false, array: true
  end

  create_table "starships", force: :cascade do |t|
    t.string "name", null: false
    t.string "model", null: false
    t.string "manufacturer", null: false
    t.string "cost_in_credits", null: false
    t.string "length", null: false
    t.string "max_atmosphering_speed", null: false
    t.string "crew", null: false
    t.string "passengers", null: false
    t.string "cargo_capacity", null: false
    t.string "consumables", null: false
    t.string "hyperdrive_rating", null: false
    t.string "MGLT", null: false
    t.string "starship_class", null: false
    t.string "created", null: false
    t.string "edited", null: false
    t.string "url", null: false
    t.text "pilots", null: false, array: true
    t.text "films", null: false, array: true
  end

  create_table "vehicles", force: :cascade do |t|
    t.string "name", null: false
    t.string "model", null: false
    t.string "manufacturer", null: false
    t.string "cost_in_credits", null: false
    t.string "length", null: false
    t.string "max_atmosphering_speed", null: false
    t.string "crew", null: false
    t.string "passengers", null: false
    t.string "cargo_capacity", null: false
    t.string "consumables", null: false
    t.string "vehicle_class", null: false
    t.string "created", null: false
    t.string "edited", null: false
    t.string "url", null: false
    t.text "pilots", null: false, array: true
    t.text "films", null: false, array: true
  end

end
