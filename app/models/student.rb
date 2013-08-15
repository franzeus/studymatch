class Student < ActiveRecord::Base

  belongs_to :vote
  belongs_to :study

end
