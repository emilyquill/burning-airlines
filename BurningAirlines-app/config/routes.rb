Rails.application.routes.draw do
  get '/search' => 'flights#search'
  
  get    'login'   => 'sessions#new'
  post   'login'   => 'sessions#create'
  delete 'logout'  => 'sessions#destroy'

  root "flights#index"
  resources :users
  resources :flights
  resources :planes
  resources :reservations


end
