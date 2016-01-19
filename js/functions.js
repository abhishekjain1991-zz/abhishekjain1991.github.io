// Web page data

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

var work_experience = {
	companies : [
	{
		Name: "Cisco",
		Time: "Present - Jun 2015",
		Role: "Software Engineer",
		Responsibilities: ["Learn about and enhance Cisco's IOS-XR OS for the new NCS-5500 series router.",
		"Add new Clis to show and visualize router stats.","Create a new packet decoding library using Cython and C to decode live packets.",
		"Create a high-speed packet-filter to filter out packets from high-speed traffic flows.",
		"Understand and enhance the driver code.","Created scripts to directly programme the router hardware.",
		"Automate the procedure of creating upgrade packages and sending it to the Software Test Engineer that required the upgrade package."],
		Languages_used:"C, Python, Cyhton",
		Location:"San Jose, California, United States"
	},
	{
		Name: "Ericsson",
		Time: "Aug 2014 – Dec 2014",
		Role: "Software Engineering Intern",
		Responsibilities: ["Worked with the line card software engineering team.","Redesigning the Unit Test Test Framework.",
		"Rewriting the Unit test Framework.","Adding plugins and libraries to the Unit Test Framework.",
		"Using SWIG to create python wrappers for C code.","Adding ability to execute C kernel code using the Unit Test Framework (which is written in Python).",
		"Adding support for MPLS, IPv4, IPv6 and LAG test cases.","Enhance packet generation and evaluation framework so as to make it compatible with the new libraries and plugins and the new framework as a whole.",
		"Modifying the framework to make Test scripts as short and simple as possible.","Adding ability to visualize various statistics.",
		"Fixing bugs and writing example test cases to be used with Framework."],
		Languages_used:"C, Python",
		Location:"San Jose, California, United States"
	},
	{
		Name: "Georgia Tech Research Institute",
		Time: "May 2014 - Aug 2014",
		Role: "Software Engineering Intern",
		Responsibilities: ["Worked on the research project named Novel and Efficient Technologies for Content Aware Computational Hierarchies (NEXTCACHE).", 
		"Adding new features to the existing Gem5 framework.","Studied existing pre-fetchers in the Gem 5 framework.","Responsible for completely automating the build process by using Jenkins and Bash scripting.",
		"Adding new features to the existing launch scripts.",
		"Developing real time test cases by using software tools such as Pocket Sphinx."],
		Languages_used:"C, C++, Python",
		Location:"Atlanta, Georgia, United States"
	},
	{
		Name: "Immense Engineering Research Group",
		Time: "Aug 2012 - Jun 2013",
		Role: "Director, Software Engineering <p></p><p>Started a small company based in Mumbai (India) that helped Engineering and final year diploma students with their academic projects. Worked on several projects mentioned below.</p>",
		Responsibilities: ["Design and development of an automaton.", "Remote controlled skate-board.", "Cellphone for the blind.",  
		"Design and implementation of Pressure control system for Brace Treatment of Scoliosis.", "Coin-based mobile-charging system.", "Chain pulling detection system for trains in India.", "Automated Anti-Tampering system."],
		Languages_used:"C++, C, Arduino-Uno-Ide, Matlab, Python",
		Location:"Mumbai, Maharashtra, India"
	},
	{
		Name: "Godrej",
		Time: "Dec 2011 - Apr 2012",
		Role: "Plc algorithm development and implementation Intern",
		Responsibilities: ["Development and implementation of algorithms for PLCs used at GODREJ's manufacturing plant in Mumbai. Worked on the Simens s7-1200 and s7-300 PLC."],
		Languages_used:"SIMATIC-STEP-7",
		Location:"Mumbai, Maharashtra, India"
	}
	]
}

// Variables to format the above web-page data 

var education_type = '<div class = "education-level col-md-6 col-xs-6" id = "%type%"></div>';
var education_type_header = '<div class = "education-type-header row no-gutter"></div>';
var education_icon = '<img src="./images/%image-name%.png" id = "%type%-img" class="education-type-img img-responsive col-md-3 col-xs-3">';
var education_text = '<div class = "education-type-text col-md-9 col-xs-9"></div>';
var college_name = '<h3 class = "college-name">%data%</h3>';
var college_degree = '<h4 class = "college-degree">%data%</h4>';
var college_time = '<h4 class = "college-years">%data%</h4>';
var time_in_company = '<span class = "tl-date">%time_span%</span>';
var company_name = '<p class = "company-name">%cname%</p>';
var company_details = '<h4>%location%</h4><h4>%role%</h4>';
var contributions = '<h4>Tasks Performed:</h4>';
var languages_used = '<h4>%languages_used%</h4>';
var single_responsibility = '<li>%single_responsibility%</li>';



//Functions for creating the data

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


function create_education_type_subsection(index, type){
	$(".education-holder").append('<div class = "sub-section '+type+'-section row"></div>');
	if(index%2 === 0){
		$('.sub-section:last').append('<div class="up-arrow-left"></div>');
	}else{
		$('.sub-section:last').append('<div class="up-arrow-right"></div>');
	}
	$('.sub-section:last').append('<br>');
	$('.sub-section:last').append('<div class = "study-details col-md-6 col-xs-6"></div>');
	$('.study-details:last').append('<h4>GPA: '+education["schools"][index]["GPA"]+'</h4>');
	$('.study-details:last').append('<h4>Minor: '+education["schools"][index]["Minor"]+'</h4>');
	$('.study-details:last').append('<h4>Location: '+education["schools"][index]["Location"]+'</h4>');
	$('.sub-section:last').append('<div class = "courses col-md-6 col-xs-6"></div>');
	$('.courses:last').append('<h4 class="course-list">Courses Taken</h4>');
	$('.courses:last').append('<ul></ul>');
	for(element_number in  education["schools"][index]['courses']){
		$('ul:last').append('<li>'+education["schools"][index]["courses"][element_number]+'</li>');
	}
	$('.sub-section:last').append('<br>');
}

function create_education_details(){

	for (var index = 0 ; index<education["schools"].length; index++){
		if(index%2 === 0){
			$(".education-holder").append('<div class="education row"></div>');
		}
		var type = education["schools"][index]["Type"];
		var icon = education["schools"][index]["Icon"];
		var name = education["schools"][index]["Name"];
		var dates = education["schools"][index]["Dates"];
		var education_string = education["schools"][index]["Degree"]+"  "+education["schools"][index]["Major"];
		$(".education:last").append(education_type.replace("%type%",type));
		$(".education-level:last").append(education_type_header);
		$(".education-type-header:last").append(education_icon.replace("%image-name%",icon).replace("%type%",type));
		$(".education-type-header:last").append(education_text);
		$(".education-type-text:last").append(college_name.replace("%data%",name));
		$(".education-type-text:last").append(college_time.replace("%data%",education_string));
		$(".education-type-text:last").append(college_degree.replace("%data%",dates));	
		create_education_type_subsection(index, type);
	}

	$('.education-type-img').fadeTo('slow', 0.7);
	$('.sub-section').hide('fast');
}

function create_work_experience_data(){
	for (var index = 0 ; index<work_experience["companies"].length; index++){
		$('.work-experience-holder').append("<div class = 'work-entry row no-gutter' id = "+index+"></div>");
		$('.work-entry:last').append('<div class = "tl-entry col-xs-4 col-md-4"></div>');
		$('.tl-entry:last').append('<h3></h3>');
		$('h3:last').append(time_in_company.replace('%time_span%',work_experience["companies"][index]["Time"]));
		$('h3:last').append('<span class = "outer-dot"></span>');
		$('.outer-dot:last').append('<span class = "inner-dot"></span>');
		$('.work-entry:last').append('<div class = "work-place-name col-md-7 col-xs-7 divider divider_extended_'+index+'"></div>');
		$('.divider_extended_'+index).css({'border-left': '3px solid #aaa'});
		$('.work-place-name:last').append('<h3></h3>');
		$('h3:last').append(company_name.replace('%cname%',work_experience["companies"][index]["Name"]));
		$('.work-entry:last').append('<div class ="work-info row no-gutter"></div>');
		$('.work-info:last').append('<div class = "col-xs-4 col-md-4 "></div>');
		$('.work-info:last').append('<div class = "work-details col-md-8 col-xs-8"></div>');
		$('.work-details:last').append('<div class = "work-items-list"></div>');
		$('.work-items-list:last').append(company_details.replace('%role%',work_experience["companies"][index]["Role"]).replace('%location%',work_experience["companies"][index]["Location"]));
		$('.work-items-list:last').append(contributions);
		$('.work-items-list:last').append('<ul class = "responsibility-list"></ul>');
		for (work_items = 0; work_items<work_experience["companies"][index]["Responsibilities"].length;work_items++){
			$('.responsibility-list:last').append(single_responsibility.replace('%single_responsibility%',work_experience["companies"][index]["Responsibilities"][work_items]));
		}
		$('.work-items-list:last').append('<br>');
		
	}
	$('.divider_extended_0').css({'border-left-color': 'rgba(0,0,0,0)'});
	
	//This is for the last dot

	$('.work-experience-holder').append("<div class = 'work-entry row no-gutter' id = "+index+"></div>");
	$('.work-entry:last').append('<div class = "tl-entry-last col-xs-4 col-md-4"></div>');
	$('.tl-entry-last:last').append('<h3></h3>');
	$('h3:last').append('<span class = "outer-dot-last"></span>');
	$('.work-entry:last').append('<div class = "work-place-name col-md-7 col-xs-7"></div>');
	$('.work-place-name:last').css({'border-left': '3px solid #aaa'});
	$('.work-place-name:last').append('<h3></h3>');
	//This is for removing the upper divider from the first work-place-name
	$('.divider_extended_0').css({'border-left-color': 'rgba(0,0,0,0)'});
	$('.work-entry').fadeTo('slow', 0.5);
	
}

//functions for creating the event handlers

function bindAboutEvents() {
	var onHover = function() {
			$('.my-picture').fadeTo('slow', 1);
			
	}, onHoverOut = function() {
			$('.my-picture').fadeTo('slow', 0.7);
	};
	
	$('.about-info').hover(onHover, onHoverOut);
}

function bindEduEvents() {
	
	//Event delegation using on
	
	$('.education').on( 'mouseenter', '.education-level', function(event){
		var type = this.id;
		$('#'+type+'-img').fadeTo('slow', 1);
		$('.'+type+'-section').show('fast');
		
	}).on('mouseleave', '.education-level', function(event){
		var type = this.id;
		$('#'+type+'-img').fadeTo('slow', 0.75);
		$('.'+type+'-section').hide('fast');
	});
	
}

function bindExperienceEvents(){
		$('.work-experience-holder').on( 'mouseenter', '.work-entry', function(event){
		var entry_id = parseInt(this.id,10);
		$('#'+entry_id).fadeTo('fast',1);
		$('.divider_extended_'+(entry_id+1)).css({'border-left-color': 'rgba(100,100,100,1)'});
		if(entry_id !== 0){
			$('.divider_extended_'+(entry_id)).css({'border-left-color': 'rgba(100,100,100,0.25)'});
		}
		if(entry_id === work_experience["companies"].length-1){
			$('#'+(entry_id+1)).fadeTo('fast',1);
		}
		
	}).on('mouseleave', '.work-entry', function(event){
		var entry_id = parseInt(this.id,10);
		/*0.5*0.5 = 0.25*/
		if(entry_id !== 0){
			$('.divider_extended_'+(entry_id)).css({'border-left-color': 'rgba(100,100,100,0.5)'});
			//0.5
		}
		$('#'+entry_id).fadeTo('fast', 0.5);
		//0.5
		$('.divider_extended_'+(entry_id+1)).css({'border-left-color': 'rgba(100,100,100,0.5)'});

	});
}

function bindScroller(){
	$(window).on('scroll',function(){
		//console.log(($(window).scrollTop()/($(document).height()-$(window).height())*100));	
		$('#footer').css({'width':(($(window).scrollTop()/($(document).height()-$(window).height()))*100)+'%'});
		$('.footer-block').css({'margin-left':(($(window).scrollTop()/($(document).height()-$(window).height()))*100)+'%'});
		//console.log($(document).height());
		//console.log($(window).height());
	});
}
//functions for rendering the web page

function set_up() {
	$.preload( 'images/biopic.jpg', 'images/bachellors-icon.png', 'images/graduation-icon.png','images/online.png');
	$('.my-picture').fadeTo('slow', 0.7);
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
	create_work_experience_data();
	bindEduEvents();
	bindExperienceEvents();
	bindScroller();

}


function initalize() {
	
	set_up();
	mobile_or_desktop();
			/*bindTimelineEvents();
	bindSkillsEvents();
	bindLikesEvents();*/
	
}



/*function bindTimelineEvents() {

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