class CreateFilms < ActiveRecord::Migration[6.1]
  def change
    create_table :films do |t|
      t.integer :episode_id, null: false
      t.string :created, null: false
      t.string :edited, null: false
      t.string :director, null: false
      t.string :opening_crawl, null: false
      t.string :producer, null: false
      t.string :release_date, null: false
      t.string :title, null: false
      t.string :url, null: false
      t.text :characters, array: true, null: false
      t.text :planets, array: true, null: false
      t.text :starships, array: true, null: false
      t.text :species, array: true, null: false
      t.text :vehicles, array: true, null: false
    end
  end
end
