#!/usr/bin/ruby
require 'httparty'

urlPath = "http://127.0.0.1:8080"
filePath = "_data/aff/ligue3/"

response = HTTParty.get(urlPath+'/scorerRanking/3/aff')

File.open(filePath+"scorers.json","w") do |f|
  f.write(response.body)
end

# # 3eme ligue AFF global
# response = HTTParty.get('http://127.0.0.1:8080/teams/global/aff/3')

# File.open("_data/aff/ligue3/global-standard.json","w") do |f|
#   f.write(response.body)
# end

# response = HTTParty.get('http://127.0.0.1:8080/teams/defense/aff/3')

# File.open("_data/aff/ligue3/global-defense.json","w") do |f|
#   f.write(response.body)
# end

# response = HTTParty.get('http://127.0.0.1:8080/teams/attack/aff/3')

# File.open("_data/aff/ligue3/global-attack.json","w") do |f|
#   f.write(response.body)
# end
# # 3eme ligue AFF standard
# response = HTTParty.get('http://127.0.0.1:8080/teams/global/aff/3/1')

# File.open("_data/aff/ligue3/standard/group1.json","w") do |f|
#   f.write(response.body)
# end

# response = HTTParty.get('http://127.0.0.1:8080/teams/global/aff/3/2')

# File.open("_data/aff/ligue3/standard/group2.json","w") do |f|
#   f.write(response.body)
# end

# response = HTTParty.get('http://127.0.0.1:8080/teams/global/aff/3/3')

# File.open("_data/aff/ligue3/standard/group3.json","w") do |f|
#   f.write(response.body)
# end

# # 3eme ligue AFF attack
# response = HTTParty.get('http://127.0.0.1:8080/teams/attack/aff/3/1')

# File.open("_data/aff/ligue3/attack/group1.json","w") do |f|
#   f.write(response.body)
# end

# response = HTTParty.get('http://127.0.0.1:8080/teams/attack/aff/3/2')

# File.open("_data/aff/ligue3/attack/group2.json","w") do |f|
#   f.write(response.body)
# end

# response = HTTParty.get('http://127.0.0.1:8080/teams/attack/aff/3/3')

# File.open("_data/aff/ligue3/attack/group3.json","w") do |f|
#   f.write(response.body)
# end

# # 3eme ligue AFF defense
# response = HTTParty.get('http://127.0.0.1:8080/teams/defense/aff/3/1')

# File.open("_data/aff/ligue3/defense/group1.json","w") do |f|
#   f.write(response.body)
# end

# response = HTTParty.get('http://127.0.0.1:8080/teams/defense/aff/3/2')

# File.open("_data/aff/ligue3/defense/group2.json","w") do |f|
#   f.write(response.body)
# end

# response = HTTParty.get('http://127.0.0.1:8080/teams/defense/aff/3/3')

# File.open("_data/aff/ligue3/defense/group3.json","w") do |f|
#   f.write(response.body)
# end