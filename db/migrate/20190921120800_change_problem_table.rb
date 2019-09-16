class ChangeProblemTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :problems, :exemption_id
  end
end
