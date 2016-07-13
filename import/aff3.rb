#!/usr/bin/ruby
require 'httparty'
require 'fileutils'

urlPath = "http://127.0.0.1:8080"

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
  response = HTTParty.get(urlPath+'/teams/global/'+region+'/'+league+'/'+group)
  File.open(filePath+"standard/group"+group+".json","w") do |f|
    f.write(response.body)
  end
end

def create_league_data(region,league,groups,filePath,urlPath)
  if(groups.length > 1)
    create_global_rankings_files(league.to_s,region,filePath,urlPath)
  end
  groups.each { |x| create_defense_rankings_by_group(x.to_s,league.to_s,region,filePath,urlPath) }
  groups.each { |x| create_attack_rankings_by_group(x.to_s,league.to_s,region,filePath,urlPath) }
  groups.each { |x| create_standard_rankings_by_group(x.to_s,league.to_s,region,filePath,urlPath) }
end

def create_scorers_data(league,region,filePath,urlPath)
  response = HTTParty.get(urlPath+'/scorerRanking/'+league.to_s+'/'+region)
  File.open(filePath+"scorers.json","w") do |f|
    f.write(response.body)
  end
end

def create_directories(filePath)
  dirname = File.dirname(filePath+'random')
  unless File.directory?(dirname)
    FileUtils.mkdir_p(dirname)
  end
  unless File.directory?(dirname+'/standard')
    FileUtils.mkdir_p(dirname+'/standard')
  end
  unless File.directory?(dirname+'/attack')
    FileUtils.mkdir_p(dirname+'/attack')
  end
  unless File.directory?(dirname+'/defense')
    FileUtils.mkdir_p(dirname+'/defense')
  end
end

leagues = []

# AFF 2eme ligue
groups = [*1..1]
region = 'aff'
league = 2
filePath = "_data/aff/ligue2/"
create_directories(filePath)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})

# AFF 3eme ligue
groups = [*1..3]
region = 'aff'
league = 3
filePath = "_data/aff/ligue3/"
create_directories(filePath)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})

# AFF 4eme ligue
groups = [*1..5]
region = 'aff'
league = 4
filePath = "_data/aff/ligue4/"
create_directories(filePath)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})

# AFF 5eme ligue
groups = [*1..5]
region = 'aff'
league = 5
filePath = "_data/aff/ligue5/"
create_directories(filePath)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})

leagues.each { |l| 
  create_league_data(l[:region],l[:league],l[:groups],l[:filePath],urlPath)
  create_scorers_data(l[:league],l[:region],l[:filePath],urlPath)
}





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