class Api::ReviewsController < ApplicationController
  def create
    @review = Review.create!(review_params)
    render :show
  end

  private

  def review_params
    params.require(:review).permit(
      :body,
      :rating,
      :author_id,
      :gig_id
    )
  end
end
