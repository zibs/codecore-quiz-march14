class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :products, :likes
  # has_many :products
  def products
    object.products.map {|p| p.name }
  end

end
