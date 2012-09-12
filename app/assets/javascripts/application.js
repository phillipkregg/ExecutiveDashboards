// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap


$(function() {
	
	$("span.view_more").bind("click", function(){	
		
		var link = $(this);
		
		var box = $(this).parent().siblings().find(".no_display");
				
		box.slideToggle("slow", function(){
			if($(this).css("display") == "none") {
				link.html("<a>view more</a>");
			} else if($(this).css("display") == "block") {
				link.html("<a>hide</a>");
			}
					
		});
		
	});
	
	
	$("#score_card_grade li a").popover();
	
	
}); // end jQuery document.ready function

