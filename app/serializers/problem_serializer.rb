class ProblemSerializer < ActiveModel::Serializer
  attributes :detail, :category, :exemption
  
  class ExemptionSerializer < ActiveModel::Serializer
    attributes :id, :user_id
  end
end
