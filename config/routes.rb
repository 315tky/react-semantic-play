Rails.application.routes.draw do
#  resources :problem
#  resources :home
  root 'home#index'
  get 'home/index'

  get 'problem/index'
  post 'problem/create'
end
