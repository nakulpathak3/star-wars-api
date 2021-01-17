Rails.application.routes.draw do
  root 'site#index'

  namespace :api do
    ['people', 'films', 'planets', 'species', 'starships', 'vehicles'].each do |entity|
      get "#{entity}", to: "#{entity}#index"
      get "#{entity}/:id", to: "#{entity}#get"
      get "#{entity}/search/:query", to: "#{entity}#search"
    end
  end

  get '*page', to: 'site#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  # just for fun
  get 'tic_tac_toe', to: 'tic_tac_toe#index'
end
