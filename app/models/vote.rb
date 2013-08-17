class Vote < ActiveRecord::Base

  belongs_to :creator, class_name: Student
  belongs_to :subject, class_name: Student
  belongs_to :study

  validates :creator, presence: true 
  validates :subject, presence: true

  after_initialize :select_subject
  after_initialize :set_study
  before_create :is_correct?

  def is_correct?
    self.correct = self.subject.study == self.study
  end

  def answers
    answers = Study.where("id != ?", self.study_id).order("RANDOM()").limit(2)
    (answers << self.study).shuffle
  end

  def select_subject
    self.subject = Student.votable.where('id != ?', (creator_id || false)).order("RANDOM()").first
  end

  def set_study
    self.study = subject.study
  end

  def answer(study_id)
    true
  end
end
