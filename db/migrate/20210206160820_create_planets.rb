class CreatePlanets < ActiveRecord::Migration[6.1]
  def change
    create_table :planets do |t|
      t.integer :climate
      t.string :created, null: false
      t.string :edited, null: false
      t.string :diameter, null: false
      t.string :gravity, null: false
      t.string :name, null: false
      t.string :orbital_period, null: false
      t.string :rotation_period, null: false
      t.string :population, null: false
      t.string :terrain, null: false
      t.string :surface_water, null: false
      t.string :url, null: false
      t.text :residents, array: true, null: false
      t.text :films, array: true, null: false
    end
  end
end
