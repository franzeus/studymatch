class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.belongs_to :creator
      t.belongs_to :subject
      t.boolean :correct

      t.timestamps
    end
  end
end
