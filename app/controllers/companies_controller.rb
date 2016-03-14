class CompaniesController < ApplicationController

  def index
    @companies = Company.order("created_at DESC")
    respond_to do |format|
      format.html { render }
      format.json { render json: @companies }
    end
  end

  def update
    @company = Company.find(params[:id])
    @company.update(likes: @company.likes += 1) ? (redirect_to root_path ): (redirect_to root_path  )
  end


    private

     def company_params
       params.require(:company).permit([:name, :likes])
     end

end
