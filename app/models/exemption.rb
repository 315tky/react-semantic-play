class Exemption < ApplicationRecord
  belongs_to :problem
  belongs_to :user

  def self.create_exemptions(checkboxes)
   checkboxes.each do |e|
     if e["checked"] == true
       problem = Problem.find_by(id: e["id"])
       exemption = self.create(user_id: 1, problem_id: problem.id)
       exemption.save 
     end 
    end
  end
end
