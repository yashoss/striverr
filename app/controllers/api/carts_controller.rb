class Api::CartsController < ApplicationController
  def create
    @cart = Cart.create!(cart_params)
    render json: {}
  end

  def show
    @cart = Cart.includes(:gigs).find_by_user_id(params[:user_id])
    render :show
  end

  def patch
  end

  def destroy
  end

  private

  def cart_params
    params.require(:cart).permit(:user_id, :gig_id)
  end

end
