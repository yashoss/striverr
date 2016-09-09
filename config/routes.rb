Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create]
    resource :session, only: [:create, :destroy]
    resources :gigs
    resources :carts, only: [:create, :index, :destroy]
    resources :reviews
    resources :orders, only: [:create]
  end

  root "static_pages#root"
end
