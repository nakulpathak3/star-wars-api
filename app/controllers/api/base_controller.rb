class Api::BaseController < ApplicationController
  respond_to :json

  def resource
    raise "Must be implemented"
  end

  def index
    resp = JSON.parse(Faraday.get("https://swapi.dev/api/#{resource}/").body)
    result = resp['results']
    i = 2
    while resp['next'] != nil
      resp = JSON.parse(Faraday.get("https://swapi.dev/api/#{resource}/?page=#{i}").body)
      i += 1
      result.append(resp['results'])
    end
    render json: result
  end

  def get
    render json: JSON.parse(Faraday.get("https://swapi.dev/api/#{resource}/#{params[:id]}/").body)
  end

  def search
    render json: JSON.parse(Faraday.get("https://swapi.dev/api/#{resource}/?search=#{params[:query]}").body)
  end
end
