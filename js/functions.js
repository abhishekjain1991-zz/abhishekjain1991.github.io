var outerDivHeight = 0;
var timelineHeight = 0;

function initalize() {
	
	set_up();
	mobile_or_desktop();
	bindAboutEvents();
	bindEduEvents();
	/*bindTimelineEvents();
	bindSkillsEvents();
	bindLikesEvents();*/
	
}

function mobile_or_desktop(){
	var mql = window.matchMedia("screen and (max-width: 992px)");
	if (mql.matches){
		about_me_mobile();
	}
	else{
		bindAboutEvents();
	}
}
function about_me_mobile()
{
	$('.me-points').not(':animated').hide('fast');
	$('.my-intro').append("<a href='#my-id-intro' class = 'more-button'>...more</a>");
	$('.more-button').css({'color':'#18919a',"text-decoration":"none","padding-bottom":"0","font-family":"Roboto, serif","font-size":"0.90em","padding-left":"0.50em"});
	$('#some-day').append("<a href='#my-id-intro' class = 'less-button'>...less</a>");
	$('.less-button').css({'color':'#18919a',"text-decoration":"none","font-size":"1.25em","display":"block"});
 	$('.more-button').on("click",function() {			
		$('.me-points').show('slow');
		$('.more-button').hide('slow');
		$('less-button').show('slow');			
	});

	$('.less-button').on("click",function() {	
		$('.me-points').hide('slow');
		$('.more-button').show('slow');
	});
}
function set_up() {
	$.preload( 'images/biopic.jpg', 'images/bachellors-icon.png', 'images/graduation-icon.png','images/online.png');
	$('.my-picture').fadeTo('slow', 0.7);
	$('.masters-img').fadeTo('slow', 0.7);
	$('.bachellors-img').fadeTo('slow', 0.7);
	$('.online-img').fadeTo('slow', 0.7);
	$('.masters-sub-section').hide('fast');
	$('.online-sub-section').hide('fast');
	$('.bachellors-sub-section').hide('fast');

}

function bindAboutEvents() {
	var onHover = function() {
			$('.my-picture').fadeTo('slow', 1);
			
	}, onHoverOut = function() {
			$('.my-picture').fadeTo('slow', 0.7);
	};
	
	$('.about-info').hover(onHover, onHoverOut);
}

function bindEduEvents() {
	var onHover_masters = function() {
			$('.masters-img').fadeTo('slow', 1);
			$('.masters-sub-section').show('fast');
	}, onHoverOut_masters = function() {
			$('.masters-img').fadeTo('slow', 0.75);
			$('.masters-sub-section').hide('fast');
	};
	
	$('.masters-img').hover(onHover_masters, onHoverOut_masters);

	var onHover_bachellors = function() {
			$('.bachellors-img').fadeTo('slow', 1);
			$('.bachellors-sub-section').show('fast');
	}, onHoverOut_bachellors = function() {
			$('.bachellors-img').fadeTo('slow', 0.75);
			$('.bachellors-sub-section').hide('fast');
	};
	
	$('.bachellors-img').hover(onHover_bachellors, onHoverOut_bachellors);

	var onHover_online = function() {
			$('.online-img').fadeTo('slow', 1);
			$('.online-sub-section').show('fast');
	}, onHoverOut_online = function() {
			$('.online-img').fadeTo('slow', 0.75);
			$('.online-sub-section').hide('fast');
	};
	
	$('.online-img').hover(onHover_online, onHoverOut_online);

	
	
}

function bindTimelineEvents() {

	// Decorate
	//$(".timeline-item.last .info ").append("<span class='small-dot'/>");
	//$(".timeline-item .year").append("<span class='marker'><span class='dot'></span></span>");
	
	var onHover = function () {
		$(".timeline-item").removeClass("active");
		$(this).toggleClass("active");
		$(this).prev(".timeline-item").toggleClass("close");
		$(this).next(".timeline-item").toggleClass("close");
	};
	
	$(".timeline-item").hover(onHover);
	
	if (isTouchDevice()) {
		$(".timeline-item").bind("touchstart", onHover);
	}

}

function bindSkillsEvents() {

	var drawFunc = function () {
		var w = $(this).find(".rating").html()*100;
		$(this).animate({ width: w }, 500);
	};
	
	$(".skills-container .skill-fill").each(drawFunc);
	
	$("#skills").bind('mouseenter', function(event){
		$(".skills-container .skill-fill").width(0);
		$(this).find(".skill-fill").each(drawFunc);
		
	});

	// draw level separators
	var h = $(".skills-wrapper").first().height();
	
	var leftOffset = 30;
	var labels = ["Beginner", "Familiar", "Proficient", "Master"];
	
	$(".skills-wrapper").each(function( index ) {
		for (var i = 0; i < 4; i++) {
			var left = (i+1)*100;
			var leftLabel = left - leftOffset;
			var html = "<span class='skills-separator' style='left: " + left + "px; padding-bottom: " + h +"px;'></span><span class='skills-separator-label' style='left: " + leftLabel + "px;'>" + labels[i] + "</span>";
			$(this).prepend(html);
		}
	});
}



function isTouchDevice() {
	return ('ontouchstart' in window || (window.DocumentTouch && document instanceof DocumentTouch));
}

/*function getActualHeight(element) {
	var actualHeight = 0;
	// try to grab the height of the elem
	if (element.height() > 0) {
		actualHeight = element.height();

		// if height is zero, then we're dealing with a hidden element
	} else {
		var copied_elem = element.clone()
                      .attr("id", false)
                      .css({visibility:"visible", display:"block"});
		copied_elem.find("p").css({visibility:"visible", display:"block"});
		$(".timeline").append(copied_elem);
		actualHeight = copied_elem.find("h2").height() + copied_elem.find("p").height();
		copied_elem.remove();
	}
	
	return actualHeight;
}*/