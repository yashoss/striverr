class Api::GigsController < ApplicationController
  def new
  end

  def create
  end

  def index
    @gigs = Gig.all.includes(:user)
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

end
