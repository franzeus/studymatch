class Student < ActiveRecord::Base

  belongs_to :study
  has_many :votes, foreign_key: 'creator_id'

  validates :study, presence: true
end
