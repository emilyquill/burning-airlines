class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.references :user, index: true, foreign_key: true
      t.references :flight, index: true, foreign_key: true
      t.integer :column
      t.integer :row

      t.timestamps null: false
    end
  end
end
