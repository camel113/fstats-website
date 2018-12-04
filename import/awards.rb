#!/usr/bin/ruby
require 'httparty'
require 'fileutils'

urlPath = "http://127.0.0.1:8083"

def create_teams_cleansheets_awards_by_league_and_region (region,nationalId,filePath,urlPath)
  response = HTTParty.get(urlPath+'/awards/cleansheets/'+nationalId+'/'+region)
  File.open(filePath+"cleansheets.json","w") do |f|
    f.write(response.body)
  end
end

def create_topscorer_awards_by_league_and_region (region,nationalId,filePath,urlPath)
  response = HTTParty.get(urlPath+'/awards/topscorer/'+nationalId+'/'+region)
  File.open(filePath+"topscorer.json","w") do |f|
    f.write(response.body)
  end
end

def create_teams_attackaverage_awards_by_league_and_region (region,nationalId,filePath,urlPath)
  response = HTTParty.get(urlPath+'/awards/attackaverage/'+nationalId+'/'+region)
  File.open(filePath+"attackaverage.json","w") do |f|
    f.write(response.body)
  end
end

def create_teams_defenseaverage_awards_by_league_and_region (region,nationalId,filePath,urlPath)
  response = HTTParty.get(urlPath+'/awards/defenseaverage/'+nationalId+'/'+region)
  File.open(filePath+"defenseaverage.json","w") do |f|
    f.write(response.body)
  end
end

def create_teams_unbeaten_awards_by_league_and_region (region,nationalId,filePath,urlPath)
  response = HTTParty.get(urlPath+'/awards/unbeaten/'+nationalId+'/'+region)
  File.open(filePath+"unbeaten.json","w") do |f|
    f.write(response.body)
  end
end

def create_teams_victoryonly_awards_by_league_and_region (region,nationalId,filePath,urlPath)
  response = HTTParty.get(urlPath+'/awards/victoryonly/'+nationalId+'/'+region)
  File.open(filePath+"victoryonly.json","w") do |f|
    f.write(response.body)
  end
end

def create_directories(filePath)
  dirname = File.dirname(filePath+"random")
  unless File.directory?(dirname)
    FileUtils.mkdir_p(dirname)
  end
end

leaguesFlat = []
leagues = []
regions = []
# AFF 2eme ligue
region = 'aff'
nationalId = '2m'
filePath = "_data/awards/2m/aff/"
create_directories(filePath)
leagues.push(:region => region, :nationalId => nationalId, :filePath => filePath)

leagues.each { |l|
  create_teams_cleansheets_awards_by_league_and_region(l[:region],l[:nationalId],l[:filePath],urlPath)
  create_topscorer_awards_by_league_and_region(l[:region],l[:nationalId],l[:filePath],urlPath)
  create_teams_attackaverage_awards_by_league_and_region(l[:region],l[:nationalId],l[:filePath],urlPath)
  create_teams_defenseaverage_awards_by_league_and_region(l[:region],l[:nationalId],l[:filePath],urlPath)
  create_teams_victoryonly_awards_by_league_and_region(l[:region],l[:nationalId],l[:filePath],urlPath)
  create_teams_unbeaten_awards_by_league_and_region(l[:region],l[:nationalId],l[:filePath],urlPath)
}