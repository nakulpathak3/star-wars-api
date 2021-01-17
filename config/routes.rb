Rails.application.routes.draw do
  get 'tic_tac_toe', to: 'tic_tac_toe#index'

  namespace :api do
    ['people', 'films', 'planets', 'species', 'starships', 'vehicles'].each do |entity|
      get "#{entity}", to: "#{entity}#index"
      get "#{entity}/:id", to: "#{entity}#get"
      get "#{entity}/search/:query", to: "#{entity}#search"
    end
  end
end
