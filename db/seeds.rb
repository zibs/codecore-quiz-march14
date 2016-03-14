# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
5.times do
  c = Company.create(name: Faker::Company.name)
  4.times do
    g = Product.new(name: Faker::Commerce.product_name)
    g.company = c
    g.save
  end
end


#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
