class AddPathViewToAreas < ActiveRecord::Migration
  def change
    add_column :areas, :path_view, :oid
  end
end
