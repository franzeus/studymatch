class Vote < ActiveRecord::Base

  belongs_to :creator, class_name: Student
  belongs_to :subject, class_name: Student
  belongs_to :study
  belongs_to :answer, class_name: Study

  validates :subject, presence: true

  after_initialize :select_subject
  after_initialize :set_study
  before_create :set_correct

  def set_correct
    self.correct = self.study_id == self.answer_id
  end

  def correct?
    self.correct
  end

  def answers
    answers = Study.where("id != ?", self.study_id).order("RANDOM()").limit(2)
    (answers << self.study).shuffle
  end

  def select_subject
    self.subject_id ||= Student.votable.where('id != ?', (creator_id || false)).order("RANDOM()").first.id
  end

  def set_study
    self.study = subject.study
  end
end
