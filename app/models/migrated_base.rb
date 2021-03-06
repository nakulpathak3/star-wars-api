class MigratedBase < ApplicationRecord
  self.abstract_class = true

  def all
    if !Rails.cache.exist?("#{self.class.name.downcase}-all")
      resp = JSON.parse(Faraday.get("https://swapi.dev/api/#{self.class.name.downcase}/").body)
      result = resp['results']
      self.class.insert_all(result)

      while resp['next'] != nil
        resp = JSON.parse(Faraday.get("https://swapi.dev/api#{resp['next'].partition('/api').last}").body)
        result = resp['results']
        self.class.insert_all(result)
      end
      Rails.cache.write("#{self.class.name.downcase}-all", true, expires_in: 6.hours)
    end
    self.class.all
  end

  def get_by_id(id)
    if !self.class.find_by(id: id)
      record = JSON.parse(Faraday.get("https://swapi.dev/api/#{self.class.name.downcase}/#{id}/").body)
      record['id'] = id
      if !record["detail"] # not found
        self.class.create!(record)
      end
    end
    self.class.select(self.class.column_names - ["id"]).find(id)
  end

  def search(query)
    resp = JSON.parse(Faraday.get("https://swapi.dev/api/#{self.class.name.downcase}/?search=#{query}").body)
    result = resp['results']
    while resp['next'] != nil
      resp = JSON.parse(Faraday.get("https://swapi.dev/api#{resp['next'].partition('/api').last}").body)
      result.concat(resp['results'])
    end
    result
  end

  def clear_cache
    Rails.cache.delete("#{self.class.name.downcase}-all")
    self.class.delete_all
  end
end
