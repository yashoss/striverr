class Api::GigsController < ApplicationController
  def new
  end

  def create
  end

  def index
    @gigs = Gig.all
    render json: @gigs
  end

  def patch
  end

  def destroy
  end

  def show
    @gig = Gig.find(params[:id])
    render json: @gig
  end

end
