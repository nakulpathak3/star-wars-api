Rails.application.routes.draw do
  get 'tic_tac_toe', to: 'tic_tac_toe#index'

  namespace :api do
    get 'people', to: 'people#index'
    get 'people/:id', to: 'people#get'
    get 'people/search/:query', to: 'people#search'
  end
end
