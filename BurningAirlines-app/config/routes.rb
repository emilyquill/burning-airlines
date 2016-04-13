Rails.application.routes.draw do
  get '/search' => 'flights#search'
  resources :reservations
  root "planes#home"

  get    'login'   => 'sessions#new'
  post   'login'   => 'sessions#create'
  delete 'logout'  => 'sessions#destroy'

  resources :users
  resources :flights
  resources :planes
  resources :reservations


end
