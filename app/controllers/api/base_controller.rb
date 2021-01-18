class Api::BaseController < ApplicationController
  respond_to :json

  def resource
    raise "Must be implemented"
  end

  def index
    render json: resource.constantize.new.all
  end

  def get
    render json: resource.constantize.new.get_by_id(params[:id])
  end

  def search
    render json: resource.constantize.new.search(params[:query])
  end

  def clear_cache
    resource.constantize.new.clear_cache
    render json: { cleared: true }
  end
end
