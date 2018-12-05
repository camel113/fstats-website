#!/usr/bin/ruby
require 'httparty'
require 'fileutils'
require 'json'

urlPath = "http://127.0.0.1:8083"

def create_teams_cleansheets_awards_by_league_and_region (region,nationalId,filePath,urlPath)
  response = HTTParty.get(urlPath+'/awards/cleansheets/'+nationalId+'/'+region)
  File.open(filePath+"cleansheets.json","w") do |f|
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


# Page generation

def create_awards_page_region(region,league,urlPath)
	date = Time.now.strftime("%Y-%m-%d")
	topScorerResponse = HTTParty.get(urlPath+'/awards/topscorer/'+league+'/'+region)
	topScorersBody = JSON.parse(topScorerResponse.body)
	topScorers = topScorersBody['topscorers']
	puts topScorers
	dir = File.dirname("awards/"+league+"/"+region+"/random")
  unless File.directory?(dir)
    FileUtils.mkdir_p(dir)
  end
	File.open("awards/"+league+"/"+region+"/index.html","w") do |f|
		f.write('---')
		f.write "\n"
		f.write "layout: default"
		f.write "\n"
		f.write "title: Awards "+region.upcase
		f.write "\n"
		f.write "lang_only_title_meta: Awards "+region.upcase+" - "+Time.now.strftime("%d/%m/%Y")
		f.write "\n"
		f.write "lang_only_description_meta: Les meilleurs buteurs "+region.upcase+" des championnats de football amateur de la 2e à la 5e ligue - "+Time.now.strftime("%d/%m/%Y")
		f.write "\n"
		f.write('date: '+date+' 09:00:00 +0200')
		f.write "\n"
		f.write "description_for_facebook: Classements buteurs "+region.upcase+"."
		f.write "\n"
		f.write "title_for_facebook: "+region.upcase+" - Top buteurs"
		f.write "\n"
		f.write "image_for_facebook: /images/facebook/image-"+region+"-facebook.jpg"
		f.write "\n"
		f.write('---')
		f.write "\n"
		f.write '<main class="main-content">'
	  f.write		'<section class="footstats-awards">'
	  f.write 		'<section class="footstats-icon">'
	  f.write 			'<img class="footstats-icon__img" src="images/2.0/footstats-round-100.png" alt="Footstats" srcset="images/2.0/footstats-round-200.png 2x"/>'
	  f.write 		'</section>'
	  f.write			'<section class="page-title">'
		f.write	 			'<h1 class="page-title__general">Footstats Awards</h1>'
		f.write	  		'<h2 class="page-title__description-league">1er tour saison 18/19 | '+region.upcase+'</h2>'
		f.write			'</section>'
		f.write			'<section class="page-title">'
		f.write	    	'<h1 class="page-title__league">2e ligue</h1>'
		f.write	  	'</section>'
		f.write	   '<section class="awards">'
		f.write	     '<h3 class="awards__title">Meilleur buteur</h3>'
		topScorers.each do |winner|
			f.write	   '<p class="awards__winner">'+winner['scorer']+' ('+winner['team']+') avec '+winner['goals'].to_s+' buts marqués</p>'
		end
		f.write	   '</section>'
		f.write "\n"
	end
end


leaguesFlat = []
leagues = []
regions = []

# AFF 2eme ligue
filePath = "_data/awards/league2m/aff/"
# create_directories(filePath)
leagues.push(:region => 'aff', :nationalId => '2m', :filePath => filePath)

# AFF 3eme ligue
filePath = "_data/awards/league3m/aff/"
# create_directories(filePath)
leagues.push(:region => 'aff', :nationalId => '3m', :filePath => filePath)

leagues.each { |l|
  create_awards_page_region(l[:region],l[:nationalId],urlPath)
}

# leagues.each { |l|
#   create_teams_cleansheets_awards_by_league_and_region(l[:region],l[:nationalId],l[:filePath],urlPath)
#   create_topscorer_awards_by_league_and_region(l[:region],l[:nationalId],l[:filePath],urlPath)
#   create_teams_attackaverage_awards_by_league_and_region(l[:region],l[:nationalId],l[:filePath],urlPath)
#   create_teams_defenseaverage_awards_by_league_and_region(l[:region],l[:nationalId],l[:filePath],urlPath)
#   create_teams_victoryonly_awards_by_league_and_region(l[:region],l[:nationalId],l[:filePath],urlPath)
#   create_teams_unbeaten_awards_by_league_and_region(l[:region],l[:nationalId],l[:filePath],urlPath)
# }