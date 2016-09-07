class Api::CartsController < ApplicationController
  def create
    @cart = Cart.create!(cart_params)
    render json: {}
  end

  def index
    @cart = Cart.where(user_id: params[:user_id]).includes(:gig)
    render :index
  end

  def patch
  end

  def destroy
    @cart = Cart.find(params[:id])
    user_id = @cart.user_id
    @cart.destroy
    @cart = Cart.where(user_id: user_id).includes(:gig)
    render :index
  end

  private

  def cart_params
    params.require(:cart).permit(:user_id, :gig_id)
  end

end
