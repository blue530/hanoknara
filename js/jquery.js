// slide
$("#banner ul li").hide();
$("#banner ul li:nth-child(1)").show();
setInterval(function(){
   $("#banner ul li:nth-child(1)").fadeOut(3000).next().fadeIn(3000).end().appendTo("#banner ul")},3000);
