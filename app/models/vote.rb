class Vote < ActiveRecord::Base

  belongs_to :creator, class_name: Student
  belongs_to :subject, class_name: Student

  validates :creator, presence: true 
  validates :subject, presence: true

  before_create :is_correct?

  def is_correct?
    self.correct = true
  end
end
