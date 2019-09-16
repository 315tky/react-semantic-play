class ProblemController < ApplicationController
  def index
    @problems = Problem.all
#    render json: @problems # this was to try out the serializer, for now lets just render the problems as html for react
  end

  def create
    checkboxes = params[:checkboxes]
    Exemption.create_exemptions(checkboxes)

    respond_to do |format|
      format.json { render json: 0 }
    end
  end

end
