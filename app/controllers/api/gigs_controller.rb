class Api::GigsController < ApplicationController
  def create
    @gig = Gig.create!(gig_params)
    render :show
  end

  def index
    @gigs = Gig.includes(:user).all
    render :index
  end

  def patch
  end

  def destroy
  end

  def show
    @gig = Gig.includes(:user).find(params[:id])
    render :show
  end

  private

  def gig_params
    params.require(:gig).permit(
      :title,
      :user_id,
      :category,
      :description,
      :photo_url,
      :delivery_time,
      :revisions,
      :price
    )
  end

end
