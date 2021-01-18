class CreatePeople < ActiveRecord::Migration[6.1]
  def change
    create_table :people do |t|
      t.string :birth_year, null: false
      t.string :created, null: false
      t.string :edited, null: false
      t.string :eye_color, null: false
      t.string :gender, null: false
      t.string :hair_color, null: false
      t.string :height, null: false
      t.string :homeworld, null: false
      t.string :mass, null: false
      t.string :name, null: false
      t.string :skin_color, null: false
      t.string :url, null: false
      t.string :vehicles, null: false
      t.text :films, array: true, null: false
      t.text :species, array: true, null: false
      t.text :starships, array: true, null: false
    end
  end
end
