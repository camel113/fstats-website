#!/usr/bin/ruby
require 'httparty'
require 'fileutils'

urlPath = "http://127.0.0.1:8082"

def create_global_rankings_files(league,region,filePath,urlPath)
  response = HTTParty.get(urlPath+'/teams/global/'+region+'/'+league)
  File.open(filePath+"global-standard.json","w") do |f|
    f.write(response.body)
  end

  response = HTTParty.get(urlPath+'/teams/defense/'+region+'/'+league)
  File.open(filePath+"global-defense.json","w") do |f|
    f.write(response.body)
  end

  response = HTTParty.get(urlPath+'/teams/attack/'+region+'/'+league)
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

def create_topflop_data(region,filePath,urlPath)
  response = HTTParty.get(urlPath+'/stats/topflop/'+region)
  File.open(filePath+"/topflop.json","w") do |f|
    f.write(response.body)
  end
end

def create_directories(filePath)
  dirname = File.dirname(filePath+"random")
  unless File.directory?(dirname+'/stats')
    FileUtils.mkdir_p(dirname+'/stats')
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

def generate_stats_for_regions_league(league,region,filePath,urlPath)
  response = HTTParty.get(urlPath+'/stats/top10scorers/'+region+'/'+league.to_s)
  File.open(filePath+"stats/scorers.json","w") do |f|
    f.write(response.body)
  end
end

def generate_stats_for_leagues_accross_region(league,urlPath)
  filePath = "_data/"
  dirname = File.dirname(filePath+"random")
  unless File.directory?(dirname+'/stats')
    FileUtils.mkdir_p(dirname+'/stats')
  end
  response = HTTParty.get(urlPath+'/stats/top10scorers/'+league.to_s)
  File.open(filePath+"stats/scorersLeague"+league.to_s+".json","w") do |f|
    f.write(response.body)
  end
end

leagues = []
regions = []
# AFF 2eme ligue
groups = [*1..1]
region = 'aff'
league = 2
filePath = "_data/aff/ligue2/"
create_directories(filePath)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
regions.push(region)

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

# ACVF 3eme fem
groups = [*1..1]
region = 'aff'
league = 30
filePath = "_data/aff/ligue30/"
create_directories(filePath)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
regions.push(region)

# ACVF 2eme ligue
groups = [*1..2]
region = 'acvf'
league = 2
filePath = "_data/acvf/ligue2/"
create_directories(filePath)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})

# ACVF 3eme ligue
groups = [*1..4]
region = 'acvf'
league = 3
filePath = "_data/acvf/ligue3/"
create_directories(filePath)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})

# ACVF 4eme ligue
groups = [*1..8]
region = 'acvf'
league = 4
filePath = "_data/acvf/ligue4/"
create_directories(filePath)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})

# ACVF 5eme ligue
groups = [*1..7]
region = 'acvf'
league = 5
filePath = "_data/acvf/ligue5/"
create_directories(filePath)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})

# ACVF 3eme fem
groups = [*1..1]
region = 'acvf'
league = 30
filePath = "_data/acvf/ligue30/"
create_directories(filePath)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
regions.push(region)

# ACGF 2eme ligue
groups = [*1..1]
region = 'acgf'
league = 2
filePath = "_data/acgf/ligue2/"
create_directories(filePath)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
regions.push(region)

# ACGF 3eme ligue
groups = [*1..2]
region = 'acgf'
league = 3
filePath = "_data/acgf/ligue3/"
create_directories(filePath)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})

# ACGF 4eme ligue
groups = [*1..3]
region = 'acgf'
league = 4
filePath = "_data/acgf/ligue4/"
create_directories(filePath)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})

# ACGF 5eme ligue
groups = [*1..3]
region = 'acgf'
league = 5
filePath = "_data/acgf/ligue5/"
create_directories(filePath)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})

# ANF 2eme ligue
groups = [*1..1]
region = 'anf'
league = 2
filePath = "_data/anf/ligue2/"
create_directories(filePath)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
regions.push(region)

# ANF 3eme ligue
groups = [*1..2]
region = 'anf'
league = 3
filePath = "_data/anf/ligue3/"
create_directories(filePath)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})

# ANF 4eme ligue
groups = [*1..3]
region = 'anf'
league = 4
filePath = "_data/anf/ligue4/"
create_directories(filePath)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})

# ANF 5eme ligue
groups = [*1..2]
region = 'anf'
league = 5
filePath = "_data/anf/ligue5/"
create_directories(filePath)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})


# AVF 2eme ligue
groups = [*1..1]
region = 'avf'
league = 2
filePath = "_data/avf/ligue2/"
create_directories(filePath)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
regions.push(region)

# AVF 3eme ligue
groups = [*1..2]
region = 'avf'
league = 3
filePath = "_data/avf/ligue3/"
create_directories(filePath)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})

# AVF 4eme ligue
groups = [*1..4]
region = 'avf'
league = 4
filePath = "_data/avf/ligue4/"
create_directories(filePath)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})

# AVF 5eme ligue
groups = [*1..3]
region = 'avf'
league = 5
filePath = "_data/avf/ligue5/"
create_directories(filePath)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})

# AFV 2eme ligue
groups = [*1..1]
region = 'afv'
league = 2
filePath = "_data/afv/ligue2/"
create_directories(filePath)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
regions.push(region)

leagues.each { |l| 
  create_league_data(l[:region],l[:league],l[:groups],l[:filePath],urlPath)
  create_scorers_data(l[:league],l[:region],l[:filePath],urlPath)
  generate_stats_for_regions_league(l[:league],l[:region],l[:filePath],urlPath)
  generate_stats_for_leagues_accross_region(l[:league],urlPath)
}
# def create_topflop_data(region,filePath,urlPath)
#   response = HTTParty.get(urlPath+'/topflop/'+region)
#   File.open(filePath+"topflop.json","w") do |f|
#     f.write(response.body)
#   end
# end
regions.each { |r|
  create_topflop_data(r,'_data/'+r,urlPath)
}