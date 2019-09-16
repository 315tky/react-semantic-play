Rails.application.routes.draw do
  resources :problem
  resources :home
#  get 'problem/index'
  root 'problem#index'
  post 'home/create'
  get 'home/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
