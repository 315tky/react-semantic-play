class HomeController < ApplicationController
  def index
    @problems = Problem.all
  end

  def create
    checkbox_values = params[:checkboxes]
    checkbox_values.each do |e|
      if e["checked"] == true
        problem = Problem.find_by(id: e["id"])
        exemption = Exemption.create(user_id: 1)
        problem.update(exemption_id: exemption.id)
        problem.save
      end
    end
    respond_to do |format|
      format.json { render json: 0 }
    end
  end

end
