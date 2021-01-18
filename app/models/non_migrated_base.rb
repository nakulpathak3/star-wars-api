class NonMigratedBase < ApplicationRecord
  self.abstract_class = true

  def all
    resp = JSON.parse(Faraday.get("https://swapi.dev/api/#{resource}/").body)
    result = resp['results']
    i = 2
    while resp['next'] != nil
      resp = JSON.parse(Faraday.get("https://swapi.dev/api/#{resource}/?page=#{i}").body)
      i += 1
      result.append(resp['results'])
    end
    result
  end

  def get_by_id(id)
    JSON.parse(Faraday.get("https://swapi.dev/api/#{resource}/#{params[:id]}/").body)
  end

  def search(query)
    JSON.parse(Faraday.get("https://swapi.dev/api/#{resource}/?search=#{params[:query]}").body)
  end

  def clear_cache
    Rails.cache.delete('#{self.class.name.downcase}-all')
  end
end
