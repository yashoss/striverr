class Api::UsersController < ApplicationController

	def create
		@user = User.new(user_params)
		p @user

		if @user.save
			login(@user)
			render :show
		else
			render json: @user.errors.full_messages, status: 422
		end
	end

	def show
		@user = User.includes(:gigs, :carts, :sells).find(params[:id])
		unless (current_user && current_user.id == @user.id)
			@user.profile_views += 1
			@user.save
			print("viewed")
		end
		render :show
	end

	private

	def user_params
		params.require(:user).permit(:username, :password, :email)
	end

end
