#!/usr/bin/ruby
require 'httparty'
require 'fileutils'
require 'json'

File.open("posts-images/image-mobile.html","w") do |f|
	
	f.write('---')
	f.write "\n"
	f.write "layout: resume-region-image"
	f.write "\n"
	f.write('---')
	f.write "\n"
	# puts jsondata['top5scorers']
	f.write '<div class="stats-social-container mobile aff" id="resume">'
	f.write('<div class="stats-table-social-post"><table class="table">')
	f.write('<thead><tr><th><i class="fa fa-male"></i></th><th>Ligue</th><th><i class="fa fa-futbol-o"></i></th></tr></thead>')
	f.write('<tbody>')
	file = File.read('_data/acgf/ligue2/stats/scorers.json')
	jsondata = JSON.parse(file)
	previousGoals = 0
	jsondata['top5scorers'].each_with_index do |i,index|
   	if index >= 1 && i["goals"] != previousGoals
   		f.write("</td>")
   		f.write("<td>3</td>")
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
	file = File.read('_data/acgf/ligue3/stats/scorers.json')
	jsondata = JSON.parse(file)
	previousGoals = 0
	jsondata['top5scorers'].each_with_index do |i,index|
   	if index >= 1 && i["goals"] != previousGoals
   		f.write("</td>")
   		f.write("<td>3</td>")
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
	f.write('</tbody></table></div>')
	f.write '</div>'
 	
end


def create_post_image_by_region(region)

	File.open("posts-images/image-"+region+".html","w") do |f|
	
		f.write('---')
		f.write "\n"
		f.write "layout: resume-region-image"
		f.write "\n"
		f.write('---')
		f.write "\n"
		# puts jsondata['top5scorers']
		f.write('<div class="stats-social-container '+region+' id="resume">')
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
	File.open("_posts/2017-03-11-resume-"+region+".md","w") do |f|
		f.write('---')
		f.write "\n"
		f.write "layout: post"
		f.write "\n"
		f.write "title: "+region.upcase+" - Les stats de la semaine"
		f.write "\n"
		f.write('date:   2017-03-11 17:15:00 +0200')
		f.write "\n"
		f.write('---')
		f.write "\n"
		f.write "<p>Chaque semaine retrouvez les meilleurs buteurs "+region.upcase+" de la 2e à la 5e ligue.</p>"
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