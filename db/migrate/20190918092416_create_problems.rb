class CreateProblems < ActiveRecord::Migration[5.2]
  def change
    create_table :problems do |t|
      t.string :detail
      t.string :category
      t.timestamps
    end
  end
end
