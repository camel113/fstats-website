#!/usr/bin/ruby
require 'httparty'

response = HTTParty.get('http://127.0.0.1:8080/scorerRanking/3/aff')

File.open("_data/test.json","w") do |f|
  f.write(response.body)
end

puts response.body