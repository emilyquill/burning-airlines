class AddPasswordDigestColumn < ActiveRecord::Migration
    def change
      change_table :users do |t|
        t.string :password_digest
        t.text :email
      end
    end
end
