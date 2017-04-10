#!/usr/bin/ruby
require 'httparty'
require 'fileutils'
require 'json'



def create_post_image_by_region(region)
	date = Time.now.strftime("%Y-%m-%d")
	File.open("posts-images/"+date+"-image-"+region+".html","w") do |f|
	
		f.write('---')
		f.write "\n"
		f.write "layout: resume-region-image"
		f.write "\n"
		f.write('---')
		f.write "\n"
		f.write('<div class="stats-social-container '+region+'" id="resume">')
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

	File.open("posts-images/"+date+"-image-mobile-"+region+".html","w") do |f|
	
		f.write('---')
		f.write "\n"
		f.write "layout: resume-region-image"
		f.write "\n"
		f.write('---')
		f.write "\n"
		f.write('<div class="stats-social-container '+region+' mobile" id="resume">')
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
	File.open("_posts/"+date+"-resume-"+region+".md","w") do |f|
		f.write('---')
		f.write "\n"
		f.write "layout: post"
		f.write "\n"
		f.write "title: "+region.upcase+" - Meilleurs buteurs"
		f.write "\n"
		f.write "fr_only_title_meta: "+region.upcase+" - Meilleurs buteurs - "+Time.now.strftime("%d/%m/%Y")
		f.write "\n"
		f.write "fr_only_description_meta: Les meilleurs buteurs "+region.upcase+" des championnats de football amateur de la 2e à la 5e ligue - "+Time.now.strftime("%d/%m/%Y")
		f.write "\n"
		f.write('date: '+date+' 11:00:00 +0200')
		f.write "\n"
		f.write('image: '+date+'-image-'+region+'.png')
		f.write "\n"
		f.write('image-mobile: '+date+'-image-'+region+'-mobile.png')
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
		f.write "<p>Les meilleurs buteurs "+region.upcase+" des championnats de football amateur de la 2e à la 5e ligue.</p>"
		f.write "\n"
		f.write "<p>Merci de nous annoncer <b>les erreurs</b> en nous envoyant un message sur facebook, twitter ou à contact@footstats.ch</p>"
		f.write "\n"
		f.write "<p>Pour suivre en direct ou donner le score des matchs de vos équipes préférées, rendez-vous sur <a href='http://live.footstats.ch'>live.footstats.ch</a>.</p>"
		f.write "\n"
		f.write "\n"
		[*2..5].each { |x| 
			f.write "<p>Les meilleurs buteurs de #{x}ème ligue</p>"
			f.write('<table class="table">')
			f.write('<thead><tr><th><i class="fa fa-male"></i></th><th>Team</th><th><i class="fa fa-futbol-o"></i></th></tr></thead>')
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
		   		f.write("<td>#{i['scorer']}</td>")
		   		f.write("<td>#{i['team']}</td>")
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

regions = [{:acronym=>"acgf",:canton=>"de Genève"}]

regions.each { |r|
  create_post_by_region(r[:acronym],r[:canton])
  create_post_image_by_region(r[:acronym])
}
result = exec("phantomjs import/screen.js")