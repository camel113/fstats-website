#!/usr/bin/ruby
require 'httparty'
require 'fileutils'
require 'json'

urlPath = "http://127.0.0.1:8083"

def create_directories(filePath)
  dirname = File.dirname(filePath+"random")
  unless File.directory?(dirname)
    FileUtils.mkdir_p(dirname)
  end
end


# Page generation

def create_awards_page_region(region,league,urlPath)
	date = Time.now.strftime("%Y-%m-%d")
	topScorers = JSON.parse(HTTParty.get(urlPath+'/awards/topscorer/'+league+'/'+region).body)['topscorers']
	topCleansheets = JSON.parse(HTTParty.get(urlPath+'/awards/cleansheets/'+league+'/'+region).body)['teams']
	topAttackTeams = JSON.parse(HTTParty.get(urlPath+'/awards/attackaverage/'+league+'/'+region).body)['teams']
	topDefenseTeams = JSON.parse(HTTParty.get(urlPath+'/awards/defenseaverage/'+league+'/'+region).body)['teams']
	topVictoryOnly = JSON.parse(HTTParty.get(urlPath+'/awards/unbeaten/'+league+'/'+region).body)['teams']
	topUnbeaten = JSON.parse(HTTParty.get(urlPath+'/awards/unbeaten/'+league+'/'+region).body)['teams']

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
		f.write 	 '<section class="awards">'
    f.write  			'<h3 class="awards__title">Meilleure attaque</h3>'
    topAttackTeams.each do |winner|
    f.write    		'<p class="awards__winner">'+winner['team']+'</p>'
		f.write 			'<p class="awards__number">'+winner['goalsfor'].to_s+' goals marqués en '+winner['played'].to_s+'matchs</p>'
    end
    f.write	   '</section>'
    f.write 	 '<section class="awards">'
    f.write  			'<h3 class="awards__title">Meilleure défense</h3>'
    topDefenseTeams.each do |winner|
    f.write    		'<p class="awards__winner">'+winner['team']+'</p>'
		f.write 			'<p class="awards__number">'+winner['goalsagainst'].to_s+' goals encaissés en '+winner['played'].to_s+'matchs</p>'
    end
    f.write	   '</section>'
		f.write 	'<section class="awards">'
    f.write  		'<h3 class="awards__title">Plus grand nombre de cleansheets (blanchissages)</h3>'
    topCleansheets.each do |winner|
      f.write 	'<p class="awards__winner">'+winner['team']+' avec '+winner['cleansheets']+' cleansheets'
    end
    f.write		'</section>'
    f.write 	'<section class="awards">'
    f.write 		'<h3 class="awards__title">Équipe(s) invaincue(s)</h3>'
    if topUnbeaten.length > 0
        topUnbeaten.each do |winner|
					f.write '<p class="awards__winner">'+winner['team']+'</p>'
       	end
    else
          f.write '<p>Aucune équipe</p>'
    end
    f.write		'</section>'
    f.write 	'<section class="awards">'
    f.write 		'<h3 class="awards__title">Équipe(s) ne comptant que des victoires</h3>'
    if topVictoryOnly.length > 0
        topVictoryOnly.each do |winner|
					f.write '<p class="awards__winner">'+winner['team']+'</p>'
       	end
    else
          f.write '<p>Aucune équipe</p>'
    end
    f.write		'</section>'
    f.write '</main>'
		f.write "\n"
	end
end

leagues = []

# AFF 2eme ligue
filePath = "_data/awards/league2m/aff/"
leagues.push(:region => 'aff', :nationalId => '2m', :filePath => filePath)

# AFF 3eme ligue
filePath = "_data/awards/league3m/aff/"
leagues.push(:region => 'aff', :nationalId => '3m', :filePath => filePath)

leagues.each { |l|
  create_awards_page_region(l[:region],l[:nationalId],urlPath)
}