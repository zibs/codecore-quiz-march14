class CompaniesController < ApplicationController

  def index
    @companies = Company.order("created_at DESC")
    respond_to do |format|
      format.html { render }
      format.json { render json: @companies }
    end
  end

end
