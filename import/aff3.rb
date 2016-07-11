#!/usr/bin/ruby
require 'httparty'

urlPath = "http://127.0.0.1:8080"
filePath = "_data/aff/ligue3/"

def create_global_rankings_files(league,region,filePath,urlPath)
  response = HTTParty.get(urlPath+'/teams/global/aff/'+league)
  File.open(filePath+"global-standard.json","w") do |f|
    f.write(response.body)
  end

  response = HTTParty.get(urlPath+'/teams/defense/aff/'+league)
  File.open(filePath+"global-defense.json","w") do |f|
    f.write(response.body)
  end

  response = HTTParty.get(urlPath+'/teams/attack/aff/'+league)
  File.open(filePath+"global-attack.json","w") do |f|
    f.write(response.body)
  end

end

def create_defense_rankings_by_group (group,league,region,filePath,urlPath)
  response = HTTParty.get(urlPath+'/teams/defense/'+region+'/'+league+'/'+group)
  File.open(filePath+"defense/group"+group+".json","w") do |f|
    f.write(response.body)
  end
end

def create_attack_rankings_by_group (group,league,region,filePath,urlPath)
  response = HTTParty.get(urlPath+'/teams/attack/'+region+'/'+league+'/'+group)
  File.open(filePath+"attack/group"+group+".json","w") do |f|
    f.write(response.body)
  end
end

def create_standard_rankings_by_group (group,league,region,filePath,urlPath)
  response = HTTParty.get(urlPath+'/teams/standard/'+region+'/'+league+'/'+group)
  File.open(filePath+"standard/group"+group+".json","w") do |f|
    f.write(response.body)
  end
end

def create_league_data(region,league,groups,urlPath,filePath)
  create_global_rankings_files(league.to_s,region,filePath,urlPath)
  groups.each { |x| create_defense_rankings_by_group(x.to_s,league.to_s,region,filePath,urlPath) }
  groups.each { |x| create_attack_rankings_by_group(x.to_s,league.to_s,region,filePath,urlPath) }
  groups.each { |x| create_standard_rankings_by_group(x.to_s,league.to_s,region,filePath,urlPath) }
end

leagues = []

# AFF 3eme ligue
groups = [*1..3]
region = 'aff'
league = 3
create_global_rankings_files(league.to_s,region,filePath,urlPath)
leagues.push({:groups => groups, :region => region, :league => league})
leagues.each { |l| create_league_data(l[:region],l[:league],l[:groups],urlPath,filePath)}


# response = HTTParty.get(urlPath+'/scorerRanking/3/aff')

# response = HTTParty.get(urlPath+'/teams/defense/aff/3')

# File.open(filePath+"global-defense.json","w") do |f|
#   f.write(response.body)
# end

# response = HTTParty.get(urlPath+'/teams/attack/aff/3')

# File.open(filePath+"global-attack.json","w") do |f|
#   f.write(response.body)
# end
# # 3eme ligue AFF standard
# response = HTTParty.get(urlPath+'/teams/global/aff/3/1')

# File.open(filePath+"/standard/group1.json","w") do |f|
#   f.write(response.body)
# end

# response = HTTParty.get(urlPath+'/teams/global/aff/3/2')

# File.open(filePath+"standard/group2.json","w") do |f|
#   f.write(response.body)
# end

# response = HTTParty.get(urlPath+'/teams/global/aff/3/3')

# File.open(filePath+"standard/group3.json","w") do |f|
#   f.write(response.body)
# end

# # 3eme ligue AFF attack
# response = HTTParty.get(urlPath+'/teams/attack/aff/3/1')

# File.open(filePath+"attack/group1.json","w") do |f|
#   f.write(response.body)
# end

# response = HTTParty.get(urlPath+'/teams/attack/aff/3/2')

# File.open(filePath+"attack/group2.json","w") do |f|
#   f.write(response.body)
# end

# response = HTTParty.get(urlPath+'/teams/attack/aff/3/3')

# File.open(filePath+"attack/group3.json","w") do |f|
#   f.write(response.body)
# end

# # 3eme ligue AFF defense
# response = HTTParty.get(urlPath+'/teams/defense/aff/3/1')

# File.open(filePath+"defense/group1.json","w") do |f|
#   f.write(response.body)
# end

# response = HTTParty.get(urlPath+'/teams/defense/aff/3/2')

# File.open(filePath+"defense/group2.json","w") do |f|
#   f.write(response.body)
# end

# response = HTTParty.get(urlPath+'/teams/defense/aff/3/3')

# File.open(filePath+"defense/group3.json","w") do |f|
#   f.write(response.body)
# end