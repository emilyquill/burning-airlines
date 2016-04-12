# == Schema Information
#
# Table name: reservations
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  flight_id  :integer
#  column     :integer
#  row        :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Reservation < ActiveRecord::Base
  belongs_to :user
  belongs_to :flight
end
