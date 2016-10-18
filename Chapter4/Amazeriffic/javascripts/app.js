var main = function() {
	"use strict";
	
	$(".tabs a:nth-child(1)").on("click", function () {
		// make all the tabs inactive
		$(".tabs span").removeClass("active");
		
		// make the first tab active
		$(".tabs a:nth-child(1) span").addClass("active");
		
		// empty the main content so we can recreate it
		$("main .content").empty();
		
		// return false so we don't follow the link
		return false;
	});
	
	$(".tabs a:nth-child(2)").on("click", function () {
		// make all the tabs inactive
		$(".tabs span").removeClass("active");
		
		// make the first tab active
		$(".tabs a:nth-child(2) span").addClass("active");
		
		// empty the main content so we can recreate it
		$("main .content").empty();
		
		// return false so we don't follow the link
		return false;
	});
	
	$(".tabs a:nth-child(3)").on("click", function () {
		// make all the tabs inactive
		$(".tabs span").removeClass("active");
		
		// make the first tab active
		$(".tabs a:nth-child(3) span").addClass("active");
		
		// empty the main content so we can recreate it
		$("main .content").empty();
		
		// return false so we don't follow the link
		return false;
	});
};

$(document).ready(main);