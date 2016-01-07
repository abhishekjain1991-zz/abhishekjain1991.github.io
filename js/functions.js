var outerDivHeight = 0;
var timelineHeight = 0;

var education={
 	schools:[
 		{
 			Name:"Georgia Tech",
 			Degree:"M.S.",
 			Type:"masters",
 			Major:"Electrical and Computer Engineering",
 			Location:"Atlanta, GA, USA",
 			Dates: "August 2013 - May 2015",
 			Icon:"graduation-icon",
 			GPA:"3.8",
 			Minor:"C.S",
 			courses:[
 			"Advanced Operating systems",
 			"Advanced Computer Architecture",
 			"Advanced Programming Techniques for Engineering Applications",
 			"Mobile Apps and Services",
 			"Parallel and Distributed Computer Architecture",
 			"Computer Networks",
 			"GPU programming for video games",
 			"Analysis of massively parallel computer Architectures"
 			]
 		},
 		{
 			Name:"Mumbai University",
 			Degree:"B.E.",
 			Type:"bachellors",
 			Icon:"bachellors-icon",
 			Major:"Electronics and Telecommunication",
 			Dates :"August 2009 - May 2013",
 			GPA:"3.9",
 			Minor:"C.S",
 			Location:"Mumbai, India",
 			courses:[
 			"Computer programming 1 and 2",
 			"Micro-Controllers and Micro-Processors 1 and 2"
 			]
 		},
 		{
 			Name:"Udacity",
 			Degree:"Nano-Degree",
 			Major:"Front-End Web Development",
 			Dates :"August 2015 - present",
 			Type:"online",
 			Icon:"online",
 			Location:"Google Chrome",
 			GPA:"-",
 			Minor:"-",
 			courses:[
 			"Intro to HTML and CSS", "Responsive Web Design Fundamentals", "Responsive Images", "JavaScript Basics", "Intro to jQuery",
 			" Object-Oriented JavaScript","HTML5 Canvas", "Website Performance Optimization","Browser Rendering Optimization",
 			" Intro to AJAX", "JavaScript Design Patterns", "JavaScript Testing"
 			]
 		}
 	]
};

var education_type = '<div class ="%type% col-md-6 col-xs-6"></div>';
var education_type_header = '<div class = "%type%-header row no-gutter"></div>';
var education_icon = '<img src="./images/%image-name%.png" class="%type%-img img-responsive col-md-3 col-xs-3">';
var education_text = '<div class = "%type%-text col-md-9 col-xs-9"></div>';
var college_name = '<h3 class = "college-name">%data%</h3>'
var college_degree = '<h4 class = "college-degree">%data%</h4>'
var college_time = '<h4 class = "college-years">%data%</h4>'


function initalize() {
	
	set_up();
	mobile_or_desktop();
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
	create_education_details();
	bindEduEvents();

}

function create_education_details(){
	var count = education["schools"].length;
	var row = "education";
	for (index in education["schools"]){
		if(index%2 == 0){
			$(".education-holder").append('<div class="education row"></div>');
		}
		var type = education["schools"][index]["Type"];
		var icon = education["schools"][index]["Icon"];
		var name = education["schools"][index]["Name"];
		var dates = education["schools"][index]["Dates"];
		var education_string = education["schools"][index]["Degree"]+"  "+education["schools"][index]["Major"];
		$("."+row+":last").append(education_type.replace("%type%",type));
		$("."+type).append(education_type_header.replace("%type%",type));
		$("."+type+"-header").append(education_icon.replace("%image-name%",icon).replace("%type%",type));
		$("."+type+"-header").append(education_text.replace("%type%",type));
		$("."+type+"-text").append(college_name.replace("%data%",name));
		$("."+type+"-text").append(college_time.replace("%data%",education_string));
		$("."+type+"-text").append(college_degree.replace("%data%",dates));
	}

	$('.masters-img').fadeTo('slow', 0.7);
	$('.bachellors-img').fadeTo('slow', 0.7);
	$('.online-img').fadeTo('slow', 0.7);
	
	
	for (var index = 0 ; index<education["schools"].length; index++){
		var append_after = "";
		var type = education["schools"][index]["Type"];
		console.log(index);
		if(index === count-1 || index%2 === 1){
			append_after = "."+education["schools"][index]["Type"];			
		}else{
			append_after = "."+education["schools"][index+1]["Type"];
		}
		console.log(education["schools"][index]["Type"]);
		$('<div class = "'+type+'-sub-section row"></div>').insertAfter($(append_after).parent());
		if(index%2 === 0){
			$('.'+type+'-sub-section').append('<div class="up-arrow-left"></div>');
		}else{
			$('.'+type+'-sub-section').append('<div class="up-arrow-right"></div>');
		}
		$('.'+type+'-sub-section').append('<br>');
		$('.'+type+'-sub-section').append('<div class = "study-details col-md-6 col-xs-6"></div>');
		$('.'+type+'-sub-section .study-details').append('<h4>GPA: '+education["schools"][index]["GPA"]+'</h4>');
		$('.'+type+'-sub-section .study-details').append('<h4>Minor: '+education["schools"][index]["Minor"]+'</h4>');
		$('.'+type+'-sub-section .study-details').append('<h4>Location: '+education["schools"][index]["Location"]+'</h4>');
		$('.'+type+'-sub-section').append('<div class = "courses col-md-6 col-xs-6"></div>');
		$('.'+type+'-sub-section .courses').append('<h4 class="course-list">Courses Taken</h4>');
		$('.'+type+'-sub-section .courses').append('<ul></ul>');
		for(element_number in  education["schools"][index]['courses']){
			$('.'+type+'-sub-section .courses ul').append('<li>'+education["schools"][index]["courses"][element_number]+'</li>');
		}
		$('.'+type+'-sub-section').append('<br>');
	}

	$('.masters-sub-section').hide('fast');
	$('.online-sub-section').hide('fast');
	$('.bachellors-sub-section').hide('fast');
}

function about_me_mobile()
{
	$('.me-points').hide('fast');
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