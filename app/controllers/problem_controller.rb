class ProblemController < ApplicationController
  def index
    @problems = Problem.all
    render json: @problems
  end

  def create
    checkboxes = params[:checkboxes]
    Exemption.create_exemptions(checkboxes)

    respond_to do |format|
      format.json { render json: 0 }
    end
  end

end
