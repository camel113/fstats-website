#!/usr/bin/ruby
require 'httparty'

urlPath = "http://127.0.0.1:8080"
filePath = "_data/aff/ligue3/"

response = HTTParty.get(urlPath+'/scorerRanking/3/aff')

File.open(filePath+"scorers.json","w") do |f|
  f.write(response.body)
end

# # 3eme ligue AFF global
response = HTTParty.get(urlPath+'/teams/global/aff/3')

File.open(filePath+"global-standard.json","w") do |f|
  f.write(response.body)
end

response = HTTParty.get(urlPath+'/teams/defense/aff/3')

File.open(filePath+"global-defense.json","w") do |f|
  f.write(response.body)
end

response = HTTParty.get(urlPath+'/teams/attack/aff/3')

File.open(filePath+"global-attack.json","w") do |f|
  f.write(response.body)
end
# 3eme ligue AFF standard
response = HTTParty.get(urlPath+'/teams/global/aff/3/1')

File.open(filePath+"/standard/group1.json","w") do |f|
  f.write(response.body)
end

response = HTTParty.get(urlPath+'/teams/global/aff/3/2')

File.open(filePath+"standard/group2.json","w") do |f|
  f.write(response.body)
end

response = HTTParty.get(urlPath+'/teams/global/aff/3/3')

File.open(filePath+"standard/group3.json","w") do |f|
  f.write(response.body)
end

# 3eme ligue AFF attack
response = HTTParty.get(urlPath+'/teams/attack/aff/3/1')

File.open(filePath+"attack/group1.json","w") do |f|
  f.write(response.body)
end

response = HTTParty.get(urlPath+'/teams/attack/aff/3/2')

File.open(filePath+"attack/group2.json","w") do |f|
  f.write(response.body)
end

response = HTTParty.get(urlPath+'/teams/attack/aff/3/3')

File.open(filePath+"attack/group3.json","w") do |f|
  f.write(response.body)
end

# 3eme ligue AFF defense
response = HTTParty.get(urlPath+'/teams/defense/aff/3/1')

File.open(filePath+"defense/group1.json","w") do |f|
  f.write(response.body)
end

response = HTTParty.get(urlPath+'/teams/defense/aff/3/2')

File.open(filePath+"defense/group2.json","w") do |f|
  f.write(response.body)
end

response = HTTParty.get(urlPath+'/teams/defense/aff/3/3')

File.open(filePath+"defense/group3.json","w") do |f|
  f.write(response.body)
end