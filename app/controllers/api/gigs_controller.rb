class Api::GigsController < ApplicationController
  def create
    @gig = Gig.create!(gig_params)
    render :show
  end

  def index
    if(params[:category] == nil || params[:category] == "all")
      @gigs = Gig.includes(:user, :reviews).all
    elsif (params[:category] == "gaming" || params[:category] == "design" || params[:category] == "web-dev" || params[:category] == "art" || params[:category] == "writing")
      @gigs = Gig.where(category: params[:category]).includes(:user, :reviews)
    else
      @gigs = Gig.where('lower(title) Like ?', "%#{params[:category].downcase}%").includes(:user, :reviews)
    end
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
    @gig = Gig.includes(:user, :reviews).find(params[:id])
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
