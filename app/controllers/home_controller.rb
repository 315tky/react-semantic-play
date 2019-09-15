class HomeController < ApplicationController
  def index
    @users = User.all
  end

  def create
    respond_to do |format|
      format.json { render json: 0 }
    end
  end

end
