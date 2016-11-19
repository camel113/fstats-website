var stars = 0
$(document).ready(function(){
  console.log("STARS")
  $('.joueur').on('click',function(){
    if($(this).hasClass('selected')){
      $(this).removeClass('selected')
      stars--
    }else{
      if(stars < 3){
        $(this).addClass('selected')
        stars++
      }
    }
  })
})