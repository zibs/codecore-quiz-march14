class AddLikesToCompanies < ActiveRecord::Migration
  def change
    add_column :companies, :likes, :integer, default: 0
  end
end
