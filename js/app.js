$(".img-center a").on("click", function(e){
   e.preventDefault();
   $("#overlay img").attr("src", $(this).attr("href"));
   $("#overlay").fadeIn();
   var imgCaptin = $(this).find("img").attr("alt");
   $("#overlay h3").html(imgCaptin);
   $("#overlay").css("top", document.body.scrollTop + "px");
 });
$("#overlay").on("click", function(){
  $("#overlay").fadeOut();
})
