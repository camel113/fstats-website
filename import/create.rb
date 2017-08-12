#!/usr/bin/ruby
require 'httparty'
require 'fileutils'
require 'json'



def create_post_image_by_region(region,size)
	date = Time.now.strftime("%Y-%m-%d")
	File.open("posts-images/"+date+"-image-size"+size.to_s+"-"+region+".html","w") do |f|
	
		f.write('---')
		f.write "\n"
		f.write "layout: resume-region-image"
		f.write "\n"
		f.write('---')
		f.write "\n"
		f.write('<div class="stats-social-container '+region+' size'+size.to_s+'" id="resume">')
		f.write('<div class="stats-table-social-post"><table class="table">')
		f.write('<thead><tr><th><i class="fa fa-male"></i></th><th>Ligue</th><th><i class="fa fa-futbol-o"></i></th></tr></thead>')
		f.write('<tbody>')
		[*2..5].each { |x| 
			file = File.read('_data/'+region+'/ligue'+x.to_s+'/stats/scorers.json')
			jsondata = JSON.parse(file)
			previousGoals = 0
			jsondata['top5scorers'].each_with_index do |i,index|
		   	if index >= 1 && i["goals"] != previousGoals
		   		f.write("</td>")
		   		f.write("<td>"+x.to_s+"</td>")
		 		f.write("<td>"+previousGoals.to_s+"</td>")
		   		f.write('</tr>')
		   		break
		   	else
		   		puts "#{i['scorer']} #{i['goals']}"
		   		puts "#{index}"
		   		if index == 0
		   			f.write('<tr>')
		   			f.write("<td>")
	 			end
		   		f.write("<b>#{i['scorer']}")
		   		f.write("<i> #{i['team']}</i></br>")
		   		previousGoals = i["goals"]
		   	end
			end
		}
		f.write('</tbody></table></div>')
		f.write '</div>'
	 	
	end

end

def create_facebook_image_by_region(region)
	date = Time.now.strftime("%Y-%m-%d")
	File.open("posts-images/"+date+"-image-facebook-"+region+".html","w") do |f|
	
		f.write('---')
		f.write "\n"
		f.write "layout: resume-region-image"
		f.write "\n"
		f.write('---')
		f.write "\n"
		f.write('<div class="stats-social-container '+region+' facebook" id="resume">')
		f.write('<div class="stats-table-social-post"><table class="table">')
		f.write('<thead><tr><th><i class="fa fa-male"></i></th><th>Ligue</th><th><i class="fa fa-futbol-o"></i></th></tr></thead>')
		f.write('<tbody>')
		[*2..5].each { |x| 
			file = File.read('_data/'+region+'/ligue'+x.to_s+'/stats/scorers.json')
			jsondata = JSON.parse(file)
			previousGoals = 0
			jsondata['top5scorers'].each_with_index do |i,index|
		   	if index >= 1 && i["goals"] != previousGoals
		   		f.write("</td>")
		   		f.write("<td>"+x.to_s+"</td>")
		 		f.write("<td>"+previousGoals.to_s+"</td>")
		   		f.write('</tr>')
		   		break
		   	else
		   		puts "#{i['scorer']} #{i['goals']}"
		   		puts "#{index}"
		   		if index == 0
		   			f.write('<tr>')
		   			f.write("<td>")
	 			end
		   		f.write("<b>#{i['scorer']}</b>")
		   		f.write("<i> #{i['team']}</i></br>")
		   		previousGoals = i["goals"]
		   	end
			end
		}
		f.write('</tbody></table></div>')
		f.write '</div>'
	 	
	end
end

def create_post_by_region(region,canton)
	date = Time.now.strftime("%Y-%m-%d")
	File.open("_i18n/fr/_posts/"+date+"-resume-"+region+".md","w") do |f|
		f.write('---')
		f.write "\n"
		f.write "layout: new-post"
		f.write "\n"
		f.write "title: "+region.upcase+" - Meilleurs buteurs"
		f.write "\n"
		f.write "lang_only_title_meta: "+region.upcase+" - Meilleurs buteurs - "+Time.now.strftime("%d/%m/%Y")
		f.write "\n"
		f.write "lang_only_description_meta: Les meilleurs buteurs "+region.upcase+" des championnats de football amateur de la 2e à la 5e ligue - "+Time.now.strftime("%d/%m/%Y")
		f.write "\n"
		f.write('date: '+date+' 11:00:00 +0200')
		f.write "\n"
		f.write('image: '+date+'-image-'+region+'.png')
		f.write "\n"
		f.write('image-300: '+date+'-image-'+region+'-size300.png')
		f.write "\n"
		f.write('image-500: '+date+'-image-'+region+'-size500.png')
		f.write "\n"
		f.write('image-800: '+date+'-image-'+region+'-size800.png')
		f.write "\n"
		f.write('image-1100: '+date+'-image-'+region+'-size1100.png')
		f.write "\n"
		f.write('image-2200: '+date+'-image-'+region+'-size2200.png')
		f.write "\n"
		f.write('categories: resume '+region)
		f.write "\n"
		f.write "description_for_facebook: Classements buteurs du canton "+canton+"."
		f.write "\n"
		f.write "title_for_facebook: "+region.upcase+" - Top buteurs"
		f.write "\n"
		f.write "image_for_facebook: /images/facebook/"+date+"-image-"+region+"-facebook.png"
		f.write "\n"
		f.write('---')
		f.write "\n"
		f.write "Les meilleurs buteurs "+region.upcase+" des championnats de football amateur de la 2e à la 5e ligue."
		f.write "\n"
		f.write "\n"
		f.write "Merci de nous annoncer <b>les erreurs</b> en nous envoyant un message sur Facebook, Instagram ou à contact@footstats.ch"
		f.write "\n"
		f.write "\n"
		f.write "Pour suivre en direct ou donner le score des matchs de vos équipes préférées, rendez-vous sur <a href='http://live.footstats.ch'>live.footstats.ch</a>."
		f.write "\n"
		f.write "\n"
		[*2..5].each { |x| 
			f.write "Les meilleurs buteurs de #{x}ème ligue"
			f.write "\n"
			f.write "\n"
			f.write('<table class="table">')
			f.write('<thead><tr><th><i class="fa fa-male"></i></th><th><i class="fa fa-futbol-o"></i></th></tr></thead>')
			f.write('<tbody>')
			file = File.read('_data/'+region+'/ligue'+x.to_s+'/stats/scorers.json')
			jsondata = JSON.parse(file)
			previousGoals = 0
			jsondata['top5scorers'].each_with_index do |i,index|
		   	if index >= 10 && i["goals"] != previousGoals
		   		break
		   	else
		   		puts "#{i['scorer']} #{i['goals']}"
		   		puts "#{index}"
		   		f.write('<tr>')
		   		f.write("<td>#{i['scorer']}")
		   		f.write("<span class='d-block team-name'><small>#{i['team']}</small></span>")
		   		f.write("</td>")		   		
		   		f.write("<td>#{i['goals']}</td>")
		   		f.write('</tr>')
		   		previousGoals = i["goals"]
		   	end
			end
			f.write('</tbody></table>')
		}
	end
end

regions = [{:acronym=>"aff",:canton=>"de Fribourg"},{:acronym=>"acvf",:canton=>"de Vaud"},{:acronym=>"anf",:canton=>"de Neuchâtel"},{:acronym=>"avf",:canton=>"du Valais"},{:acronym=>"acgf",:canton=>"de Genève"}]

regions = [{:acronym=>"acvf",:canton=>"de Vaud"}]

sizes = [300,500,800,1100,2200]
regions.each { |r|
  create_post_by_region(r[:acronym],r[:canton])
  sizes.each { |s|
  	create_post_image_by_region(r[:acronym],s)
  	create_facebook_image_by_region(r[:acronym])
  }
}
result = exec("phantomjs import/screen.js")