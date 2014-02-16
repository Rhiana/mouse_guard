class CreateAreas < ActiveRecord::Migration
  def change
    create_table :areas do |t|
      t.string :name
      t.decimal :lat
      t.decimal :long
      t.string :catagory
      t.text :description
      t.text :inhabitants
      t.text :exploits
      t.integer :reputation

      t.timestamps
    end
  end
end
