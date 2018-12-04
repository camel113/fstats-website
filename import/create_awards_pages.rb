#!/usr/bin/ruby
require 'httparty'
require 'fileutils'
require 'json'

def create_fr_post_by_region(region,canton)
	date = Time.now.strftime("%Y-%m-%d")
	File.open("_i18n/fr/_posts/"+date+"-resume-"+region+".md","w") do |f|
		f.write('---')
		f.write "\n"
		f.write "layout: new-post"
		f.write "\n"
		f.write "title: posts.breadcrumb.post_region."+region+".title"
		f.write "\n"
		f.write "lang_only_title_meta: "+region.upcase+" - Meilleurs buteurs - "+Time.now.strftime("%d/%m/%Y")
		f.write "\n"
		f.write "lang_only_description_meta: Les meilleurs buteurs "+region.upcase+" des championnats de football amateur de la 2e à la 5e ligue - "+Time.now.strftime("%d/%m/%Y")
		f.write "\n"
		f.write('date: '+date+' 09:00:00 +0200')
		f.write "\n"
		f.write('image-800: image-'+region+'-size800.jpg')
		f.write "\n"
		f.write('image-1600: image-'+region+'-size1600.jpg')
		f.write "\n"
		f.write('categories: resume '+region)
		f.write "\n"
		f.write "description_for_facebook: Classements buteurs "+region.upcase+"."
		f.write "\n"
		f.write "title_for_facebook: "+region.upcase+" - Top buteurs"
		f.write "\n"
		f.write "image_for_facebook: /images/facebook/image-"+region+"-facebook.jpg"
		f.write "\n"
		f.write('---')
		f.write "\n"
		f.write "Les meilleurs buteurs "+region.upcase+" des championnats de football amateur de la 2e à la 5e ligue."
		f.write "\n"
		f.write "\n"
		f.write 'Merci de nous annoncer <b>les erreurs</b> à l\'aide de ce <a href="/formulaire-report-erreur" title="Signaler une erreur ou un problème">formulaire</a>.'
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
			f.write "\n"
			f.write "\n"
		}
	end
end

regions = [{:acronym=>"fvrz",:canton=>"xx"}]

regions.each { |r|
  create_post_by_region(r[:acronym],r[:canton])
}