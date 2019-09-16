class HomeController < ApplicationController
  def index
    @problems = Problem.all
  end

  def create
    checkboxes = params[:checkboxes]
    Exemption.create_exemptions(checkboxes)
    respond_to do |format|
      format.json { render json: 0 }
    end
  end
 end

