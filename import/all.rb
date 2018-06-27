#!/usr/bin/ruby
require 'httparty'
require 'fileutils'

urlPath = "http://127.0.0.1:8083"
filePathForParsingFlatNational = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/national"

def create_defense_rankings_by_league (league,region,filePath,urlPath)
  response = HTTParty.get(urlPath+'/teams/defense/'+region+'/'+league)
  File.open(filePath+"defense.json","w") do |f|
    f.write(response.body)
  end
end

def create_attack_rankings_by_league (league,region,filePath,urlPath)
  response = HTTParty.get(urlPath+'/teams/attack/'+region+'/'+league)
  File.open(filePath+"attack.json","w") do |f|
    f.write(response.body)
  end
end

def create_defenseaverage_rankings_by_league (league,region,filePath,urlPath)
  response = HTTParty.get(urlPath+'/teams/defenseaverage/'+region+'/'+league)
  File.open(filePath+"defenseaverage.json","w") do |f|
    f.write(response.body)
  end
end

def create_attackaverage_rankings_by_league (league,region,filePath,urlPath)
  response = HTTParty.get(urlPath+'/teams/attackaverage/'+region+'/'+league)
  File.open(filePath+"attackaverage.json","w") do |f|
    f.write(response.body)
  end
end

def create_teams_rankings_home_by_league (league,region,filePath,urlPath)
  response = HTTParty.get(urlPath+'/teams/rankinggrouphome/'+region+'/'+league.to_s)
  File.open(filePath+"rankinghome/global.json","w") do |f|
    f.write(response.body)
  end
end

def create_teams_rankings_away_by_league (league,region,filePath,urlPath)
  response = HTTParty.get(urlPath+'/teams/rankinggroupaway/'+region+'/'+league.to_s)
  File.open(filePath+"rankingaway/global.json","w") do |f|
    f.write(response.body)
  end
end

def create_groups_info_by_league (league,region,filePath,urlPath)
  response = HTTParty.get(urlPath+'/teams/getgroups/'+region+'/'+league)
  File.open(filePath+"groups.json","w") do |f|
    f.write(response.body)
  end
end

def create_flat_data_by_group(league,region,groups,filePath,urlPath)
  groups.each { |x| create_teams_rankings_by_group(x.to_s,league.to_s,region,filePath,urlPath) }
  groups.each { |x| create_teams_results_by_group(x.to_s,league.to_s,region,filePath,urlPath) }
  groups.each { |x| create_scorers_ranking_by_group(x.to_s,league.to_s,region,filePath,urlPath) }
  groups.each { |x| create_teams_rankings_home_by_group(x.to_s,league.to_s,region,filePath,urlPath) }
  groups.each { |x| create_teams_rankings_away_by_group(x.to_s,league.to_s,region,filePath,urlPath) }
end

def create_teams_rankings_by_group (group,league,region,filePath,urlPath)
  response = HTTParty.get(urlPath+'/teams/rankinggroup/'+region+'/'+league.to_s+'/'+group.to_s)
  File.open(filePath+"ranking/group"+group.to_s+".json","w") do |f|
    f.write(response.body)
  end
end

def create_teams_rankings_home_by_group (group,league,region,filePath,urlPath)
  response = HTTParty.get(urlPath+'/teams/rankinggrouphome/'+region+'/'+league.to_s+'/'+group.to_s)
  File.open(filePath+"rankinghome/group"+group.to_s+".json","w") do |f|
    f.write(response.body)
  end
end

def create_teams_rankings_away_by_group (group,league,region,filePath,urlPath)
  response = HTTParty.get(urlPath+'/teams/rankinggroupaway/'+region+'/'+league.to_s+'/'+group.to_s)
  File.open(filePath+"rankingaway/group"+group.to_s+".json","w") do |f|
    f.write(response.body)
  end
end

def create_teams_results_by_group (group,league,region,filePath,urlPath)
  response = HTTParty.get(urlPath+'/teams/resultsgroup/'+region+'/'+league.to_s+'/'+group.to_s)
  File.open(filePath+"fixtures/group"+group+".json","w") do |f|
    f.write(response.body)
  end
end

def create_scorers_ranking_by_group (group,league,region,filePath,urlPath)
  response = HTTParty.get(urlPath+'/scorerRanking/'+region+'/'+league.to_s+'/'+group.to_s)
  File.open(filePath+"scorers/group"+group+".json","w") do |f|
    f.write(response.body)
  end
end

def create_league_data(region,league,groups,filePath,urlPath)
  create_defense_rankings_by_league(league.to_s,region,filePath,urlPath)
  create_attack_rankings_by_league(league.to_s,region,filePath,urlPath)
  create_defenseaverage_rankings_by_league(league.to_s,region,filePath,urlPath)
  create_attackaverage_rankings_by_league(league.to_s,region,filePath,urlPath)
  create_teams_rankings_home_by_league(league.to_s,region,filePath,urlPath)
  create_teams_rankings_away_by_league(league.to_s,region,filePath,urlPath)
  create_groups_info_by_league(league.to_s,region,filePath,urlPath)
end

def create_scorers_data(league,region,filePath,urlPath)
  response = HTTParty.get(urlPath+'/topscorers/'+region+'/'+league.to_s)
  File.open(filePath+"scorers.json","w") do |f|
    f.write(response.body)
  end
end

def create_national_scorers_data(league,urlPath,filePath)
  response = HTTParty.get(urlPath+'/topscorers/'+league.to_s)
  File.open(filePath+'/ligue'+league.to_s+'/scorers.json',"w") do |f|
    f.write(response.body)
  end
end

def create_national_defense_rankings_by_league (league,urlPath,filePath)
  response = HTTParty.get(urlPath+'/teams/defense/'+league.to_s)
  File.open(filePath+'/ligue'+league.to_s+'/defense.json',"w") do |f|
    f.write(response.body)
  end
end

def create_national_attack_rankings_by_league (league,urlPath,filePath)
  response = HTTParty.get(urlPath+'/teams/attack/'+league.to_s)
  File.open(filePath+'/ligue'+league.to_s+'/attack.json',"w") do |f|
    f.write(response.body)
  end
end

def create_national_defenseaverage_rankings_by_league (league,urlPath,filePath)
  response = HTTParty.get(urlPath+'/teams/defenseaverage/'+league.to_s)
  File.open(filePath+'/ligue'+league.to_s+'/defenseaverage.json',"w") do |f|
    f.write(response.body)
  end
end

def create__national_attackaverage_rankings_by_league (league,urlPath,filePath)
  response = HTTParty.get(urlPath+'/teams/attackaverage/'+league.to_s)
  File.open(filePath+'/ligue'+league.to_s+'/attackaverage.json',"w") do |f|
    f.write(response.body)
  end
end

def create_directories(filePath)
  dirname = File.dirname(filePath+"random")
  unless File.directory?(dirname+'/attack')
    FileUtils.mkdir_p(dirname+'/attack')
  end
  unless File.directory?(dirname+'/defense')
    FileUtils.mkdir_p(dirname+'/defense')
  end
end

def create_parsing_flat_directories(filePath)
  dirname = File.dirname(filePath+"/ranking")
  unless File.directory?(dirname)
    FileUtils.mkdir_p(dirname+"/ranking")
    FileUtils.mkdir_p(dirname+'/rankinghome')
    FileUtils.mkdir_p(dirname+'/rankingaway')
    FileUtils.mkdir_p(dirname+"/fixtures")
    FileUtils.mkdir_p(dirname+"/scorers")
  end
end

def create_parsing_flat_directories_national(filePath)
  unless File.directory?(filePath+"/ligue2")
    FileUtils.mkdir_p(filePath+"/ligue2")
  end
  unless File.directory?(filePath+"/ligue3")
    FileUtils.mkdir_p(filePath+"/ligue3")
  end
  unless File.directory?(filePath+"/ligue4")
    FileUtils.mkdir_p(filePath+"/ligue4")
  end
  unless File.directory?(filePath+"/ligue5")
    FileUtils.mkdir_p(filePath+"/ligue5")
  end
end
create_parsing_flat_directories_national(filePathForParsingFlatNational)

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

leaguesFlat = []
leagues = []
regions = []
# AFF 2eme ligue
groups = [*1..1]
region = 'aff'
league = 2
filePath = "_data/aff/ligue2/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/aff/ligue2/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})

# regions.push(region)

# AFF 3eme ligue
groups = [*1..3]
region = 'aff'
league = 3
filePath = "_data/aff/ligue3/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/aff/ligue3/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})

# AFF 4eme ligue
groups = [*1..5]
region = 'aff'
league = 4
filePath = "_data/aff/ligue4/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/aff/ligue4/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})

# AFF 5eme ligue
groups = [*1..5]
region = 'aff'
league = 5
filePath = "_data/aff/ligue5/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/aff/ligue5/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})

# AFF 3eme fem
groups = [*1..1]
region = 'aff'
league = 30
filePath = "_data/aff/ligue30/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/aff/ligue30/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})
regions.push(region)

# ACVF 2eme ligue
groups = [*1..2]
region = 'acvf'
league = 2
filePath = "_data/acvf/ligue2/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/acvf/ligue2/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})

# ACVF 3eme ligue
groups = [*1..4]
region = 'acvf'
league = 3
filePath = "_data/acvf/ligue3/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/acvf/ligue3/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})

# ACVF 4eme ligue
groups = [*1..8]
region = 'acvf'
league = 4
filePath = "_data/acvf/ligue4/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/acvf/ligue4/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})

# ACVF 5eme ligue
groups = [*1..6]
region = 'acvf'
league = 5
filePath = "_data/acvf/ligue5/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/acvf/ligue5/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})

# ACVF 2eme fem
groups = [*1..1]
region = 'acvf'
league = 20
filePath = "_data/acvf/ligue20/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/acvf/ligue20/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})
regions.push(region)

# ACVF 3eme fem
groups = [*1..1]
region = 'acvf'
league = 30
filePath = "_data/acvf/ligue30/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/acvf/ligue30/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})
regions.push(region)

# ACVF 4eme fem
groups = [*1..1]
region = 'acvf'
league = 40
filePath = "_data/acvf/ligue40/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/acvf/ligue40/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})
regions.push(region)

# ACGF 2eme ligue
groups = [*1..1]
region = 'acgf'
league = 2
filePath = "_data/acgf/ligue2/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/acgf/ligue2/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})
regions.push(region)

# ACGF 3eme ligue
groups = [*1..2]
region = 'acgf'
league = 3
filePath = "_data/acgf/ligue3/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/acgf/ligue3/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})

# ACGF 4eme ligue
groups = [*1..3]
region = 'acgf'
league = 4
filePath = "_data/acgf/ligue4/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/acgf/ligue4/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})

# ACGF 5eme ligue
groups = [*1..3]
region = 'acgf'
league = 5
filePath = "_data/acgf/ligue5/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/acgf/ligue5/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})

# ANF 2eme ligue
groups = [*1..1]
region = 'anf'
league = 2
filePath = "_data/anf/ligue2/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/anf/ligue2/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})
regions.push(region)

# ANF 3eme ligue
groups = [*1..2]
region = 'anf'
league = 3
filePath = "_data/anf/ligue3/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/anf/ligue3/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})

# ANF 4eme ligue
groups = [*1..3]
region = 'anf'
league = 4
filePath = "_data/anf/ligue4/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/anf/ligue4/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})

# ANF 5eme ligue
groups = [*1..2]
region = 'anf'
league = 5
filePath = "_data/anf/ligue5/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/anf/ligue5/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})


# AVF 2eme ligue
groups = [*1..1]
region = 'avf'
league = 2
filePath = "_data/avf/ligue2/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/avf/ligue2/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})
regions.push(region)

# AVF 3eme ligue
groups = [*1..2]
region = 'avf'
league = 3
filePath = "_data/avf/ligue3/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/avf/ligue3/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})

# AVF 4eme ligue
groups = [*1..3]
region = 'avf'
league = 4
filePath = "_data/avf/ligue4/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/avf/ligue4/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})

# AVF 5eme ligue
groups = [*1..2]
region = 'avf'
league = 5
filePath = "_data/avf/ligue5/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/avf/ligue5/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})

# AVF 3eme fem
groups = [*1..1]
region = 'avf'
league = 30
filePath = "_data/avf/ligue30/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/avf/ligue30/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})
regions.push(region)

# FVBJ 2eme ligue
groups = [*1..2]
region = 'fvbj'
league = 2
filePath = "_data/fvbj/ligue2/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/fvbj/ligue2/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})
regions.push(region)

# FVBJ 3eme ligue
groups = [*1..8]
region = 'fvbj'
league = 3
filePath = "_data/fvbj/ligue3/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/fvbj/ligue3/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})
regions.push(region)

# FVBJ 4eme ligue
groups = [*1..10]
region = 'fvbj'
league = 4
filePath = "_data/fvbj/ligue4/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/fvbj/ligue4/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})
regions.push(region)

# FVBJ 5eme ligue
groups = [*1..12]
region = 'fvbj'
league = 5
filePath = "_data/fvbj/ligue5/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/fvbj/ligue5/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})
regions.push(region)

# AFV 2eme ligue
groups = [*1..1]
region = 'afv'
league = 2
filePath = "_data/afv/ligue2/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/afv/ligue2/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})
regions.push(region)

# AFV 3eme ligue
groups = [*1..2]
region = 'afv'
league = 3
filePath = "_data/afv/ligue3/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/afv/ligue3/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})
regions.push(region)

# AFV 4eme ligue
groups = [*1..4]
region = 'afv'
league = 4
filePath = "_data/afv/ligue4/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/afv/ligue4/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})
regions.push(region)

# AFV 5eme ligue
groups = [*1..3]
region = 'afv'
league = 5
filePath = "_data/afv/ligue5/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/afv/ligue5/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})
regions.push(region)

# IFV 2eme ligue
groups = [*1..1]
region = 'ifv'
league = 2
filePath = "_data/ifv/ligue2/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/ifv/ligue2/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})
regions.push(region)

# IFV 3eme ligue
groups = [*1..3]
region = 'ifv'
league = 3
filePath = "_data/ifv/ligue3/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/ifv/ligue3/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})
regions.push(region)

# IFV 4eme ligue
groups = [*1..6]
region = 'ifv'
league = 4
filePath = "_data/ifv/ligue4/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/ifv/ligue4/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})
regions.push(region)

# IFV 5eme ligue
groups = [*1..8]
region = 'ifv'
league = 5
filePath = "_data/ifv/ligue5/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/ifv/ligue5/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})
regions.push(region)

# FVNWS 2eme ligue
groups = [*1..1]
region = 'fvnws'
league = 2
filePath = "_data/fvnws/ligue2/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/fvnws/ligue2/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})
regions.push(region)

# FVNWS 3eme ligue
groups = [*1..3]
region = 'fvnws'
league = 3
filePath = "_data/fvnws/ligue3/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/fvnws/ligue3/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})
regions.push(region)

# FVNWS 4eme ligue
groups = [*1..5]
region = 'fvnws'
league = 4
filePath = "_data/fvnws/ligue4/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/fvnws/ligue4/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})
regions.push(region)

# FVNWS 5eme ligue
groups = [*1..4]
region = 'fvnws'
league = 5
filePath = "_data/fvnws/ligue5/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/fvnws/ligue5/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})
regions.push(region)

# OFV 2eme ligue
groups = [*1..2]
region = 'ofv'
league = 2
filePath = "_data/ofv/ligue2/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/ofv/ligue2/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})
regions.push(region)

# OFV 3eme ligue
groups = [*1..4]
region = 'ofv'
league = 3
filePath = "_data/ofv/ligue3/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/ofv/ligue3/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})
regions.push(region)

# OFV 4eme ligue
groups = [*1..8]
region = 'ofv'
league = 4
filePath = "_data/ofv/ligue4/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/ofv/ligue4/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})
regions.push(region)

# OFV 5eme ligue
groups = [*1..10]
region = 'ofv'
league = 5
filePath = "_data/ofv/ligue5/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/ofv/ligue5/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})
regions.push(region)

# SOFV 2eme ligue
groups = [*1..1]
region = 'sofv'
league = 2
filePath = "_data/sofv/ligue2/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/sofv/ligue2/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})
regions.push(region)

# SOFV 3eme ligue
groups = [*1..2]
region = 'sofv'
league = 3
filePath = "_data/sofv/ligue3/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/sofv/ligue3/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})
regions.push(region)

# SOFV 4eme ligue
groups = [*1..3]
region = 'sofv'
league = 4
filePath = "_data/sofv/ligue4/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/sofv/ligue4/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})
regions.push(region)

# SOFV 5eme ligue
groups = [*1..2]
region = 'sofv'
league = 5
filePath = "_data/sofv/ligue5/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/sofv/ligue5/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})
regions.push(region)

# FVRZ 2eme ligue
groups = [*1..2]
region = 'fvrz'
league = 2
filePath = "_data/fvrz/ligue2/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/fvrz/ligue2/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})
regions.push(region)

# FVRZ 3eme ligue
groups = [*1..6]
region = 'fvrz'
league = 3
filePath = "_data/fvrz/ligue3/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/fvrz/ligue3/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})
regions.push(region)

# FVRZ 4eme ligue
groups = [*1..12]
region = 'fvrz'
league = 4
filePath = "_data/fvrz/ligue4/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/fvrz/ligue4/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})
regions.push(region)

# FVRZ 5eme ligue
groups = [*1..7]
region = 'fvrz'
league = 5
filePath = "_data/fvrz/ligue5/"
filePathForParsingFlat = "/Users/adrienbigler/Documents/sysin/code/js/footstatsApiForReactNativeApp/data1718/fvrz/ligue5/"
create_directories(filePath)
create_parsing_flat_directories(filePathForParsingFlat)
leagues.push({:groups => groups, :region => region, :league => league, :filePath => filePath})
leaguesFlat.push({:groups => groups, :region => region, :league => league, :filePath => filePathForParsingFlat})
regions.push(region)


# leagues.each { |l| 
#   create_league_data(l[:region],l[:league],l[:groups],l[:filePath],urlPath)
#   create_scorers_data(l[:league],l[:region],l[:filePath],urlPath)
#   generate_stats_for_regions_league(l[:league],l[:region],l[:filePath],urlPath)
#   generate_stats_for_leagues_accross_region(l[:league],urlPath)
# }
leaguesFlat.each { |l|
  create_scorers_data(l[:league],l[:region],l[:filePath],urlPath)
  create_league_data(l[:region],l[:league],l[:groups],l[:filePath],urlPath)
  create_flat_data_by_group(l[:league],l[:region],l[:groups],l[:filePath],urlPath)
}
nationalLeagues = [2,3,4,5]
nationalLeagues.each { |l|
  create_national_scorers_data(l,urlPath,filePathForParsingFlatNational)
  create__national_attackaverage_rankings_by_league(l,urlPath,filePathForParsingFlatNational)
  create_national_defenseaverage_rankings_by_league(l,urlPath,filePathForParsingFlatNational)
  create_national_attack_rankings_by_league(l,urlPath,filePathForParsingFlatNational)
  create_national_defense_rankings_by_league(l,urlPath,filePathForParsingFlatNational)
}
# def create_topflop_data(region,filePath,urlPath)
#   response = HTTParty.get(urlPath+'/topflop/'+region)
#   File.open(filePath+"topflop.json","w") do |f|
#     f.write(response.body)
#   end
# end
# regions.each { |r|
#   create_topflop_data(r,'_data/'+r,urlPath)
# }