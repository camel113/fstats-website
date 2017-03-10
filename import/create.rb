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
		 			f.write("<td>#{i['goals']}</td>")
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
		 			f.write("<td>#{i['goals']}</td>")
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


def create_post_by_region(region)
	date = Time.now.strftime("%Y-%m-%d")
	File.open("_posts/"+date+"-resume-"+region+".md","w") do |f|
		f.write('---')
		f.write "\n"
		f.write "layout: post"
		f.write "\n"
		f.write "title: "+region.upcase+" - Les stats de la semaine"
		f.write "\n"
		f.write('date: '+date+' 11:00:00 +0200')
		f.write "\n"
		f.write('image: '+date+'-image-'+region+'.png')
		f.write "\n"
		f.write('image-mobile: '+date+'-image-'+region+'-mobile.png')
		f.write "\n"
		f.write('categories: resume '+region)
		f.write "\n"
		f.write('---')
		f.write "\n"
		f.write "<p>Retrouvez les meilleurs buteurs "+region.upcase+" des championnats de football amateur de la 2e à la 5e ligue.</p>"
		f.write "\n"
		f.write "\n"
		f.write "<p>Si vous constatez des erreurs ou des oublis dans nos classements. Laissez-nous un message sur Facebook ou Instagram. Vous avez aussi la possiblité de nous écrire à contact@footstats.ch ou par whatsapp au +41774502373.</p>"
		f.write "\n"
		[*2..5].each { |x| 
			f.write "<p>Les meilleurs buteurs de #{x}ème ligue</p>"
			f.write('<table class="table">')
			f.write('<thead><tr><th><i class="fa fa-male"></i></th><th>Ligue</th><th><i class="fa fa-futbol-o"></i></th></tr></thead>')
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

regions = ["aff","acvf","acgf","avf","anf"]

regions.each { |r|
  create_post_by_region(r)
  create_post_image_by_region(r)
}
result = exec("phantomjs import/screen.js")