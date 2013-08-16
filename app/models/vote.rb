class Vote < ActiveRecord::Base

  belongs_to :creator, class_name: Student
  belongs_to :subject, class_name: Student
  belongs_to :study

  validates :creator, presence: true 
  validates :subject, presence: true

  before_create :is_correct?

  def is_correct?
    self.correct = self.subject.study == self.study
  end

  def answers
    #select 2 random studies
    answers = Study.where("id != ?", study.id).order("RANDOM()").limit(2)
    (answers << study).shuffle
  end
end
