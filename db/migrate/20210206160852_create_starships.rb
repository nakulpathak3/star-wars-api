class CreateStarships < ActiveRecord::Migration[6.1]
  def change
    create_table :starships do |t|
      t.string :name, null: false
      t.string :model, null: false
      t.string :manufacturer, null: false
      t.string :cost_in_credits, null: false
      t.string :length, null: false
      t.string :max_atmosphering_speed, null: false
      t.string :crew, null: false
      t.string :passengers, null: false
      t.string :cargo_capacity, null: false
      t.string :consumables, null: false
      t.string :hyperdrive_rating, null: false
      t.string :MGLT, null: false
      t.string :starship_class, null: false

      t.string :created, null: false
      t.string :edited, null: false
      t.string :url, null: false
      t.text :pilots, array: true, null: false
      t.text :films, array: true, null: false
    end
  end
end
