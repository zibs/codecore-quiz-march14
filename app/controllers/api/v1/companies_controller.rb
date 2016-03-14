class Api::V1::CompaniesController < Api::BaseController

  def index
    @companies = Company.order("created_at DESC")
    render json: @companies
  end

end
