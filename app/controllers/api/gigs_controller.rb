class Api::GigsController < ApplicationController
  def create
    @gig = Gig.create!(gig_params)
    render :show
  end

  def index
    @gigs = Gig.includes(:user).all
    render :index
  end

  def update
    @gig = Gig.update(params[:id], gig_params)
    render json: {}
  end

  def destroy
    @gig = Gig.find(params[:id])
    user_id = @gig.user_id
    @gig.destroy
    render json: {}
  end

  def show
    @gig = Gig.includes(:user).find(params[:id])
    unless(current_user && current_user.id == @gig.user_id)
      @gig.gig_views += 1
      @gig.save
    end
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
