class BrowsingController < ApplicationController

  def list
    dir = DirectoryEntry.new("#{params[:path]}")
    render json: dir
  end

end
