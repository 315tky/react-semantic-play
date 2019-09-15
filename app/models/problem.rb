class Problem < ApplicationRecord
  has_one :exemption
  has_one :user, :through => :exemption
end
