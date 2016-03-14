class CompanySerializer < ActiveModel::Serializer
  attributes :name, :products
  # has_many :products
  def products
    object.products.map {|p| p.name }
  end

end
