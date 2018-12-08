#!/usr/bin/ruby
require 'httparty'
require 'fileutils'
require 'json'

urlPath = "http://127.0.0.1:8083"

def create_directory(filePath)
  dir = File.dirname(filePath)
  unless File.directory?(dir)
    FileUtils.mkdir_p(dir)
  end
end



# Page generation

def create_awards_page_region(region,urlPath)
	date = Time.now.strftime("%Y-%m-%d")
	
	dir = File.dirname("awards/"+region[:name]+"/random")
	puts dir
  unless File.directory?(dir)
    FileUtils.mkdir_p(dir)
  end

	File.open("awards/"+region[:name]+"/index.html","w") do |f|
		f.write('---')
		f.write "\n"
		f.write "layout: default"
		f.write "\n"
		f.write "title: Awards "+region[:name].upcase
		f.write "\n"
		f.write "lang_only_title_meta: Awards "+region[:name].upcase+" - "+Time.now.strftime("%d/%m/%Y")
		f.write "\n"
		f.write "lang_only_description_meta: Les meilleurs buteurs "+region[:name].upcase+" des championnats de football amateur de la 2e à la 5e ligue - "+Time.now.strftime("%d/%m/%Y")
		f.write "\n"
		f.write('date: '+date+' 09:00:00 +0200')
		f.write "\n"
		f.write "description_for_facebook: Classements buteurs "+region[:name].upcase+"."
		f.write "\n"
		f.write "title_for_facebook: "+region[:name].upcase+" - Top buteurs"
		f.write "\n"
		f.write "image_for_facebook: /images/facebook/image-"+region[:name]+"-facebook.jpg"
		f.write "\n"
		f.write('---')
		f.write "\n"
		f.write '<main class="main-content">'
		  f.write		'<section class="footstats-awards">'
		  f.write 		'<section class="footstats-icon">'
		  f.write 			'<img class="footstats-icon__img" src="{{ site.url }}/images/2.0/footstats-round-100.png" alt="Footstats" srcset="{{ site.url }}/images/2.0/footstats-round-200.png 2x"/>'
		  f.write 		'</section>'
		  f.write			'<section class="page-title">'
			f.write	 			'<h1 class="page-title__general">Footstats Awards</h1>'
			f.write	  		'<h2 class="page-title__description">1er tour saison 18/19 '+region[:name].upcase+'</h2>'
			f.write			'</section>'
		region[:leagues].each do |league|

			topScorers = JSON.parse(HTTParty.get(urlPath+'/awards/topscorer/'+league[:nationalId]+'/'+region[:name]).body)['topscorers']
			topCleansheets = JSON.parse(HTTParty.get(urlPath+'/awards/cleansheets/'+league[:nationalId]+'/'+region[:name]).body)['teams']
			topAttackTeams = JSON.parse(HTTParty.get(urlPath+'/awards/attackaverage/'+league[:nationalId]+'/'+region[:name]).body)['teams']
			topDefenseTeams = JSON.parse(HTTParty.get(urlPath+'/awards/defenseaverage/'+league[:nationalId]+'/'+region[:name]).body)['teams']
			topVictoryOnly = JSON.parse(HTTParty.get(urlPath+'/awards/unbeaten/'+league[:nationalId]+'/'+region[:name]).body)['teams']
			topUnbeaten = JSON.parse(HTTParty.get(urlPath+'/awards/unbeaten/'+league[:nationalId]+'/'+region[:name]).body)['teams']

			f.write		 '<section class="page-title">'
			f.write	    	'<h1 class="page-title__league">'+league[:name]+'e ligue</h1>'
			f.write	   '</section>'
			f.write	   '<section class="awards">'
			f.write	     '<h3 class="awards__title">Meilleur buteur 🥇</h3>'
			topScorers.each do |winner|
				f.write	   '<p class="awards__winner">'+winner['scorer']+' ('+winner['team']+')</p>'
			end
			f.write 			'<p class="awards__number">'+topScorers[0]['goals'].to_s+' buts marqués</p>'
			f.write	   '</section>'
			f.write 	 '<section class="awards">'
	    f.write  			'<h3 class="awards__title">Meilleure attaque 🏆</h3>'
	    topAttackTeams.each do |winner|
	    f.write    		'<p class="awards__winner">'+winner['team']+'</p>'
	    f.write 			'<p class="awards__number">'+winner['goalsfor'].to_s+' goals marqués en '+winner['played'].to_s+' matchs</p>'
	    end
	    f.write	   '</section>'
	    f.write 	 '<section class="awards">'
	    f.write  			'<h3 class="awards__title">Meilleure défense 🏆</h3>'
	    topDefenseTeams.each do |winner|
	    f.write    		'<p class="awards__winner">'+winner['team']+'</p>'
	    f.write 			'<p class="awards__number">'+winner['goalsagainst'].to_s+' goals encaissés en '+winner['played'].to_s+' matchs</p>'
	    end
	    f.write	   '</section>'
			f.write 	'<section class="awards">'
	    f.write  		'<h3 class="awards__title">Plus grand nombre de cleansheets (blanchissages) ❌</h3>'
	    topCleansheets.each do |winner|
	      f.write 	'<p class="awards__winner">'+winner['team']
	    end
	    f.write 			'<p class="awards__number">'+topCleansheets[0]['cleansheets'].to_s+' cleansheets</p>'
	    f.write		'</section>'
	    f.write 	'<section class="awards">'
	    f.write 		'<h3 class="awards__title">Équipe(s) invaincue(s) 🏰</h3>'
	    if topUnbeaten.length > 0
	        topUnbeaten.each do |winner|
						f.write '<p class="awards__winner">'+winner['team']+'</p>'
	       	end
	    else
	          f.write '<p class="awards__winner">Aucune équipe 😢</p>'
	    end
	    f.write		'</section>'
	    f.write 	'<section class="awards">'
	    f.write 		'<h3 class="awards__title">Équipe(s) ne comptant que des victoires 🚀</h3>'
	    if topVictoryOnly.length > 0
	        topVictoryOnly.each do |winner|
						f.write '<p class="awards__winner">'+winner['team']+'</p>'
	       	end
	    else
	          f.write '<p class="awards__winner">Aucune équipe 😢</p>'
	    end
				f.write		'</section>'
		end #end of each leagues
		f.write	'</section>'
    f.write '</main>'
		f.write "\n"
	end
end

affLeagues = []
regions = []

# AFF
# AFF 2eme ligue
create_directory("_data/awards/2m/aff/")
affLeagues.push(:nationalId => '2m', :name => "2")

# AFF 3eme ligue
create_directory("_data/awards/3m/aff/")
affLeagues.push(:nationalId => '3m', :name => "3")

regions.push(:name => 'aff', :leagues => affLeagues, filePath: 'awards/aff/')

regions.each { |region|
  create_awards_page_region(region,urlPath)
}