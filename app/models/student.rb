class Student < ActiveRecord::Base
  
  belongs_to :study
  has_many :authentications, :dependent => :destroy
  has_many :votes, foreign_key: 'creator_id'
  
  accepts_nested_attributes_for :authentications
  authenticates_with_sorcery! { |config| config.authentications_class = Authentication }

  scope :votable, -> { where('study_id != ?', false) }
end
