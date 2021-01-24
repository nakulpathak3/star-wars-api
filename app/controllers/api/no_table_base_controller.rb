class Api::NoTableBaseController < ApplicationController
  respond_to :json

  def resource
    raise "Must be implemented"
  end

  def index
    resp = JSON.parse(Faraday.get("https://swapi.dev/api/#{resource}/").body)
    result = resp['results']
    while resp['next'] != nil
      resp = JSON.parse(Faraday.get("https://swapi.dev/api#{resp['next'].partition('/api').last}").body)
      result.concat(resp['results'])
    end
    render json: result
  end

  def get
    render json: JSON.parse(Faraday.get("https://swapi.dev/api/#{resource}/#{params[:id]}/").body)
  end

  def search
    resp = JSON.parse(Faraday.get("https://swapi.dev/api/#{resource}/?search=#{params[:query]}").body)
    result = resp['results']
    while resp['next'] != nil
      resp = JSON.parse(Faraday.get("https://swapi.dev/api#{resp['next'].partition('/api').last}").body)
      result.concat(resp['results'])
    end
    render json: result
  end

  def clear_cache
    render json: { does_not_exist: true }
  end
end
