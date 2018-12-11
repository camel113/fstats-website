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

def create_awards_page_region(region,urlPath,allRegions)
	date = Time.now.strftime("%Y-%m-%d")
	
	dir = File.dirname("awards/"+region[:apiPath]+"/random")
	puts dir
  unless File.directory?(dir)
    FileUtils.mkdir_p(dir)
  end

	File.open("awards/"+region[:apiPath]+"/index.html","w") do |f|
		f.write('---')
		f.write "\n"
		f.write "layout: default"
		f.write "\n"
		f.write "no_translation_title: Awards "+region[:name].upcase+" - Footstats"
		f.write "\n"
		f.write "awards: associations."+region[:name]+".long"
		f.write "\n"
		f.write "description: awards.description"
		f.write "\n"
		f.write "description_for_facebook: awards.description"
		f.write "\n"
		f.write "title_for_facebook: Awards "+region[:name].upcase+" - Footstats"
		f.write "\n"
		f.write "image_for_facebook: /images/facebook/image-"+region[:name]+"-facebook.jpg"
		f.write "\n"
		f.write('---')
		f.write "\n"
		f.write '<main class="main-content">'
		  f.write		'<section class="footstats-awards">'
		  f.write 		'<section class="footstats-icon">'
		  f.write 			'<img class="footstats-icon__img" src="/images/2.0/footstats-round-100.png" alt="Footstats" srcset="/images/2.0/footstats-round-200.png 2x"/>'
		  f.write 		'</section>'
		  f.write			'<section class="page-title">'
			f.write	 			'<h1 class="page-title__general">Footstats Awards</h1>'
			f.write	  		'<h2 class="page-title__description">1er tour saison 18/19</h2>'
			if region[:apiPath] != ''
				f.write	  	'<h2 class="page-title__description">{% t associations.'+region[:name]+'.short %} - {% t associations.'+region[:name]+'.long %}</h2>'
			else
				f.write	  	'<h2 class="page-title__description">'+region[:name]+'</h2>'
			end
			f.write			'</section>'
			f.write 		'<nav class="simple-links-nav">'
			allRegions.each do |regionInfo|
				if regionInfo.equal?(allRegions.last)
					f.write '<a class="simple-links-nav__link" href="{{site.url}}{{ site.baseurl }}/'+regionInfo[:filePath]+'">'+regionInfo[:name].upcase+'</a>'
				else
					f.write '<a class="simple-links-nav__link" href="{{site.url}}{{ site.baseurl }}/'+regionInfo[:filePath]+'">'+regionInfo[:name].upcase+'</a> / '
				end
				
			end
			f.write 	'</nav>'
		region[:leagues].each do |league|

			topScorers = JSON.parse(HTTParty.get(urlPath+'/awards/topscorer/'+league[:nationalId]+'/'+region[:apiPath]).body)['topscorers']
			topCleansheets = JSON.parse(HTTParty.get(urlPath+'/awards/cleansheets/'+league[:nationalId]+'/'+region[:apiPath]).body)['teams']
			topAttackTeams = JSON.parse(HTTParty.get(urlPath+'/awards/attackaverage/'+league[:nationalId]+'/'+region[:apiPath]).body)['teams']
			topDefenseTeams = JSON.parse(HTTParty.get(urlPath+'/awards/defenseaverage/'+league[:nationalId]+'/'+region[:apiPath]).body)['teams']
			topVictoryOnly = JSON.parse(HTTParty.get(urlPath+'/awards/unbeaten/'+league[:nationalId]+'/'+region[:apiPath]).body)['teams']
			topUnbeaten = JSON.parse(HTTParty.get(urlPath+'/awards/unbeaten/'+league[:nationalId]+'/'+region[:apiPath]).body)['teams']

			f.write		 '<section class="page-title">'
			f.write	    	'<h1 class="page-title__league">'+league[:name]+'e ligue</h1>'
			f.write	   '</section>'
			f.write	   '<section class="awards">'
			if topScorers.size > 1
				f.write	 	'<h3 class="awards__title">{% t awards.topscorers.multiple %} 🥇</h3>'
			else
				f.write	 	'<h3 class="awards__title">{% t awards.topscorers.single %} 🥇</h3>'
			end
			
			topScorers.each do |winner|
				f.write	   '<p class="awards__winner">'+winner['scorer']+' ('+winner['team']+')</p>'
			end
			f.write 			'<p class="awards__number">'+topScorers[0]['goals'].to_s+' {% t awards.topscorers.number_description %}</p>'
			f.write	   '</section>'
			f.write 	 '<section class="awards">'
	    if topAttackTeams.size > 1
				f.write	 	'<h3 class="awards__title">{% t awards.topattack.multiple %} 🏆</h3>'
			else
				f.write	 	'<h3 class="awards__title">{% t awards.topattack.single %} 🏆</h3>'
			end
	    topAttackTeams.each do |winner|
	    f.write    		'<p class="awards__winner">'+winner['team']+'</p>'
	    f.write 			'<p class="awards__number">'+winner['goalsfor'].to_s+' {% t awards.topattack.number_description.part1 %} '+winner['played'].to_s+' {% t awards.topattack.number_description.part2 %}</p>'
	    end
	    f.write	   '</section>'
	    f.write 	 '<section class="awards">'
	    if topDefenseTeams.size > 1
				f.write	 	'<h3 class="awards__title">{% t awards.topdefense.multiple %} 🏆</h3>'
			else
				f.write	 	'<h3 class="awards__title">{% t awards.topdefense.single %} 🏆</h3>'
			end
	    topDefenseTeams.each do |winner|
	    f.write    		'<p class="awards__winner">'+winner['team']+'</p>'
	    f.write 			'<p class="awards__number">'+winner['goalsagainst'].to_s+'  {% t awards.topdefense.number_description.part1 %} '+winner['played'].to_s+'  {% t awards.topdefense.number_description.part2 %}</p>'
	    end
	    f.write	   '</section>'
			f.write 	'<section class="awards">'
	    f.write  		'<h3 class="awards__title">{% t awards.cleansheets.title %}&nbsp;❌</h3>'
	    topCleansheets.each do |winner|
	      f.write 	'<p class="awards__winner">'+winner['team']
	    end
	    f.write 			'<p class="awards__number">'+topCleansheets[0]['cleansheets'].to_s+' clean sheets</p>'
	    f.write		'</section>'
	    f.write 	'<section class="awards">'
	    f.write 		'<h3 class="awards__title">{% t awards.unbeaten.title %} 🏰</h3>'
	    if topUnbeaten.length > 0
	        topUnbeaten.each do |winner|
						f.write '<p class="awards__winner">'+winner['team']+'</p>'
	       	end
	    else
	          f.write '<p class="awards__winner">{% t awards.no_team_info %} 😢</p>'
	    end
	    f.write		'</section>'
	    f.write 	'<section class="awards">'
	    f.write 		'<h3 class="awards__title">{% t awards.victory_only.title %}&nbsp;🚀</h3>'
	    if topVictoryOnly.length > 0
	        topVictoryOnly.each do |winner|
						f.write '<p class="awards__winner">'+winner['team']+'</p>'
	       	end
	    else
	          f.write '<p class="awards__winner">{% t awards.no_team_info %} 😢</p>'
	    end
				f.write		'</section>'
		end #end of each leagues
		f.write	'</section>'
    f.write '</main>'
		f.write "\n"
	end
end

regions = []

#Suisse
swissLeagues = []
swissLeagues.push(:nationalId => '3m', :name => "3")
regions.push(:name => '🇨🇭', :apiPath => '', :leagues => swissLeagues, filePath: 'awards/')

#AFV
afvLeagues = []
afvLeagues.push(:nationalId => '3m', :name => "3")
regions.push(:name => 'afv', :apiPath => 'afv', :leagues => afvLeagues, filePath: 'awards/afv/')

#FVBJ
fvbjLeagues = []
fvbjLeagues.push(:nationalId => '3m', :name => "3")
regions.push(:name => 'fvbj', :apiPath => 'fvbj', :leagues => fvbjLeagues, filePath: 'awards/fvbj/')

#IFV
ifvLeagues = []
ifvLeagues.push(:nationalId => '3m', :name => "3")
regions.push(:name => 'ifv', :apiPath => 'ifv', :leagues => ifvLeagues, filePath: 'awards/ifv/')

#FVNWS
fvnwsLeagues = []
fvnwsLeagues.push(:nationalId => '3m', :name => "3")
regions.push(:name => 'fvnws', :apiPath => 'fvnws', :leagues => fvnwsLeagues, filePath: 'awards/fvnws/')

#OFV
ofvLeagues = []
ofvLeagues.push(:nationalId => '3m', :name => "3")
regions.push(:name => 'ofv', :apiPath => 'ofv', :leagues => ofvLeagues, filePath: 'awards/ofv/')

#SOFV
sofvLeagues = []
sofvLeagues.push(:nationalId => '3m', :name => "3")
regions.push(:name => 'sofv', :apiPath => 'sofv', :leagues => sofvLeagues, filePath: 'awards/sofv/')

#FVRZ
fvrzLeagues = []
fvrzLeagues.push(:nationalId => '3m', :name => "3")
regions.push(:name => 'fvrz', :apiPath => 'fvrz', :leagues => fvrzLeagues, filePath: 'awards/fvrz/')

#FTC
ftcLeagues = []
ftcLeagues.push(:nationalId => '3m', :name => "3")
regions.push(:name => 'ftc', :apiPath => 'ftc', :leagues => ftcLeagues, filePath: 'awards/ftc/')

# AFF
affLeagues = []
affLeagues.push(:nationalId => '2m', :name => "2")
affLeagues.push(:nationalId => '3m', :name => "3")
regions.push(:name => 'aff', :apiPath => 'aff', :leagues => affLeagues, filePath: 'awards/aff/')

#ACGF
acgfLeagues = []
acgfLeagues.push(:nationalId => '3m', :name => "3")
regions.push(:name => 'acgf', :apiPath => 'acgf', :leagues => affLeagues, filePath: 'awards/acgf/')

#ANF
anfLeagues = []
anfLeagues.push(:nationalId => '3m', :name => "3")
regions.push(:name => 'anf', :apiPath => 'anf', :leagues => anfLeagues, filePath: 'awards/anf/')

#ACVF
acvfLeagues = []
acvfLeagues.push(:nationalId => '3m', :name => "3")
regions.push(:name => 'acvf', :apiPath => 'acvf', :leagues => affLeagues, filePath: 'awards/acvf/')

#AVF
avfLeagues = []
avfLeagues.push(:nationalId => '3m', :name => "3")
regions.push(:name => 'avf', :apiPath => 'avf', :leagues => avfLeagues, filePath: 'awards/avf/')











regions.each { |region|
  create_awards_page_region(region,urlPath,regions)
}