# == Schema Information
#
# Table name: planes
#
#  id         :integer          not null, primary key
#  name       :string
#  columns    :integer
#  rows       :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Plane < ActiveRecord::Base
  has_many :flights
end
