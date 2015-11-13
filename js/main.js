$(document).ready(function(){

	$(".gallery .hero:first-child").addClass("shown");

	$(".next").on("click", function(e) {

		if ( $(".shown").is(":last-child") ) {

			$(".shown").removeClass("shown");

			$(".gallery .hero:first-child").addClass("shown");
		}
	}
	else {
		$(".shown").removeClass("shown").next().addClass("shown");
	}

	})

});

	//$("img:first").addClass("shown");
	//$(".name").text("Batman")
	
	//$(".next").on("click",function(e){


		
		//var n = $(".shown").text();
		//$(".name").text(n)

	//});