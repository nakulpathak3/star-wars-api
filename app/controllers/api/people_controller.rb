class Api::PeopleController < ApplicationController
  respond_to :json

  def index
    resp = JSON.parse(Faraday.get('https://swapi.dev/api/people/').body)
    result = resp['results']
    i = 2
    while resp['next'] != nil
      resp = JSON.parse(Faraday.get("https://swapi.dev/api/people/?page=#{i}").body)
      i += 1
      result.append(resp['results'])
    end
    render json: result
  end

  def get
    render json: JSON.parse(Faraday.get("https://swapi.dev/api/people/#{params[:id]}/").body)
  end

  def search
    render json: JSON.parse(Faraday.get("https://swapi.dev/api/people/?search=#{params[:query]}").body)
  end
end
