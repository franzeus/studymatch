# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
    mmt = Study.create(title: 'Multimedia Technology')
    mma = Study.create(title: 'Multimedia Art')
    Study.create(title: 'Medicine')

    Student.create(email: 'fake@boobs.cum', study: mmt, external_id: '588380875')
    Student.create(email: 'mail@fail.lol', study: mma, external_id: '742197780')