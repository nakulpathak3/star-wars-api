class CreateSpecies < ActiveRecord::Migration[6.1]
  def change
    create_table :species do |t|
      t.string :name, null: false
      t.string :classification, null: false
      t.string :designation, null: false
      t.string :average_height, null: false
      t.string :average_lifespan, null: false
      t.string :hair_colors, null: false
      t.string :skin_colors, null: false
      t.string :eye_colors, null: false
      t.string :homeworld
      t.string :language, null: false
      t.string :created, null: false
      t.string :edited, null: false
      t.string :url, null: false
      t.text :people, array: true, null: false
      t.text :films, array: true, null: false
    end
  end
end
