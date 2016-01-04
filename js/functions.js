var outerDivHeight = 0;
var timelineHeight = 0;

function initalize() {
	
	document.addEventListener("touchstart", function(){}, true);
	
	set_up();
	mobile_only();
	bindAboutEvents();
	bindEduEvents();
	/*bindTimelineEvents();
	bindSkillsEvents();
	bindLikesEvents();*/
	
}

function mobile_only()
{
	
	//if mobile
	var mql = window.matchMedia("screen and (max-width: 992px)");
	if (mql.matches){
		$('.me-points').not(':animated').hide('fast');
		$('.my-intro').append("<a href='#my-id-intro' class = 'more-button'>...more</a>");
		$('.more-button').css({'color':'#18919a',"text-decoration":"none","padding-bottom":"0","font-family":"Roboto, serif","font-size":"0.90em","padding-left":"0.50em"});
		$('#some-day').append("<a href='#my-id-intro' class = 'less-button'>...less</a>");
		$('.less-button').css({'color':'#18919a',"text-decoration":"none","font-size":"1.25em","display":"block"});

 		$('.more-button').on("click",function() {			
			$('.me-points').not(':animated').show('slow');
			$('.more-button').not(':animated').hide('slow');
			$('less-button').not(':animated').show('slow');
			
		});

		$('.less-button').on("click",function() {	
			$('.me-points').not(':animated').hide('slow');
			$('.more-button').not(':animated').show('slow');
		});
		
		/*, onHoverOut = function() {
					};*/
		
	//$('.my-intro .my-picture').not(':animated').stop(true, true).fadeTo('slow', 1);
	//$('.my-intro .my-picture').not(':animated').stop(true, true).fadeTo('slow', 0.5);
		
	}
}
function set_up() {
	$.preload( 'images/biopic.jpg');

}

function bindAboutEvents() {
	var onHover = function() {
			$('.circular').css('background-image', 'url(images/me-hover.png)');
			$('.circular').not(':animated').stop(true, true).fadeTo('slow', 1);
			
	}, onHoverOut = function() {
			$('.circular').css('background-image', 'url(images/me.png)');
			$('.circular').not(':animated').stop(true, true).fadeTo('slow', 0.7);
	};
	
	$('#about').hover(onHover, onHoverOut);
	
	if (isTouchDevice()) {
		$('#about').bind("touchstart", onHover).bind("touchend", onHoverOut);
	}
}

function bindEduEvents() {
	var onHover = function() {
			$('.edu-item .edu-icon').not(':animated').stop(true, true).fadeTo('slow', 1);
			$('.content-desc-additional').not(':animated').show('fast');
	}, onHoverOut = function() {
			$('.edu-item .edu-icon').not(':animated').stop(true, true).fadeTo('slow', 0.5);
			$('.content-desc-additional').not(':animated').hide('fast');
	};
	
	$('#education').hover(onHover, onHoverOut);
	
	if (isTouchDevice()) {
		$('#education').bind("touchstart", onHover).bind("touchend", onHoverOut);
	}
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