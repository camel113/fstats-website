#!/usr/bin/ruby
require 'httparty'

urlPath = "http://127.0.0.1:8080"
filePath = "_data/aff/ligue2/"

# 2eme ligue AFF standard
response = HTTParty.get(urlPath+'/teams/global/aff/2/1')

File.open(filePath+"/standard/group1.json","w") do |f|
  f.write(response.body)
end

# 2eme ligue AFF attack
response = HTTParty.get(urlPath+'/teams/attack/aff/2/1')

File.open(filePath+"attack/group1.json","w") do |f|
  f.write(response.body)
end

# 2eme ligue AFF defense
response = HTTParty.get(urlPath+'/teams/defense/aff/2/1')

File.open(filePath+"defense/group1.json","w") do |f|
  f.write(response.body)
end