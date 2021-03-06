class Api::SessionsController < ApplicationController

	def create
		@user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
		p @user

    if @user
			login(@user)
      # TODO: Redirect to page displaying option to browse or post.
			render "api/users/show"
		else
			print "2"
			render(
        json: ["Invalid username/password combination"],
        status: 401
      )
		end
	end

	def destroy
		@user = current_user
		if @user
			logout
			render "api/users/show"
		else
			render(
        json: ["Nobody signed in"],
        status: 404
      )
		end
	end

end
