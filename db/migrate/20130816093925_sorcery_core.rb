class SorceryCore < ActiveRecord::Migration
  def self.up
    create_table :students do |t|
      t.string :email,            :null => false  # if you use another field as a username, for example email, you can safely remove this field.
      t.string :crypted_password, :default => nil
      t.string :salt,             :default => nil
      t.string :first_name
      t.string :last_name
      t.string :external_id
      t.belongs_to :study
      
      t.timestamps
    end
  end

  def self.down
    drop_table :users
  end
end