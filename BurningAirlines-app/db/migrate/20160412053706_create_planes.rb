class CreatePlanes < ActiveRecord::Migration
  def change
    create_table :planes do |t|
      t.string :name
      t.integer :columns
      t.integer :rows

      t.timestamps null: false
    end
  end
end
