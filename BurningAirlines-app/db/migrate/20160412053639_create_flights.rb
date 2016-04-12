class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.string :origin
      t.string :destination
      t.datetime :date
      t.references :plane, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
