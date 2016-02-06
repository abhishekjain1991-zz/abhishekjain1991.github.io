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
 			Dates :"September 2015 - present",
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
		"Add new Clis (Command Line Interfaces) to show and visualize router stats.",
		"Create low latency and efficient software libraries for packet decoding and filtering.",
		"Understanding and enhancing the driver code",
		"Creating scripts that directly interact and program the router hardware.",
		"Automating the procedure of creating and distribution of upgrade packages to Software Test Engineers.",
		"Simplifying and automating the process of  committing and maintaining the codebase"],
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

var skills = {
	"C":3,
	"C++":3,
	"Python":3,
	"Java":2,
	"HTML":3,
	"CSS":3,
	"JavaScript":2,
	"jQuery":2

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


function create_skills_data(){
	var skills_array  = Object.keys(skills)
	var skill_wrapper_number;
	var skill_level;
	var skill_count = 0;
	for (var index = 0; index<skills_array.length;index++){
		skill_wrapper_number = index%2;
		skill_level = parseInt(skills[skills_array[index]],10)*3;
		$(".skill-set-diagram-"+parseInt(skill_wrapper_number,10)).append("<div class = 'skill-bar col-md-12 col-xs-12'><div class = 'skill-fill-container col-md-"+skill_level+" col-xs-"+skill_level+"'><div class ='skill-fill'><h4 class ='skill'>"+skills_array[index]+"</h4></div></div></div>");
		skill_count++;
	}

	//all this is being done to calculate height of the dotted seperators 

	var height_of_skill_bar = $('.skill-bar').height();
	if(skill_count%2){
		skill_count = skill_count/2 + 1;
	}else{
		skill_count = skill_count/2;
	}
	$('.seperator').css({'padding-bottom':(((height_of_skill_bar+10)*skill_count)-10)+'px'});
}





//functions for creating the event handlers

function bindAboutEvents(mobile) {
	
	if (mobile){
		$('.me-points').hide('fast');			
	}
	
	var onHover = function() {
			$('.my-picture').fadeTo('slow', 1);
			if (mobile){
				$('.me-points').show('fast');
			}
			
	}, onHoverOut = function() {
			$('.my-picture').fadeTo('slow', 0.7);
			if (mobile){
				$('.me-points').hide('fast');			
			}	
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
		if(entry_id === work_experience["companies"].length){
			return;
		}
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
		if(entry_id === work_experience["companies"].length-1){
			$('#'+(entry_id+1)).fadeTo('fast',0.5);
		}

	});
}

function bindSkillEvents(){
	var onHover = function() {
		$('.skill-fill').css({'width':'0'});
			$('.skill-fill').animate({ 'width': '100%' }, 500);
	}, onHoverOut = function() {
		
	};

	$('.skills-holder').hover(onHover, onHoverOut);
}

function bindScroller(){
	$(window).on('scroll',function(){	
		$('#footer').css({'width':(($(window).scrollTop()/($(document).height()-$(window).height()))*100)+'%'});
	});
}


//map related functions


var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /* 
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js. 
  */
  map = new google.maps.Map(document.querySelector('#mapDiv'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];


    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide: 
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    
    education.schools.forEach(function(school){
      locations.push(school.Location);
    });

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide: 
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    
    //work.forEach(function(job){
    //  locations.push(job.location);
    //});

    work_experience.companies.forEach(function(school){
      locations.push(school.Location);
    });

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
      infoWindow.open(map, marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
      locations.forEach(function(place){
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}


//Uncomment the code below when you are ready to implement a Google Map!




//functions for rendering the web page

function set_up() {
	$.preload( 'images/biopic.jpg', 'images/bachellors-icon.png', 'images/graduation-icon.png','images/online.png');
	$('.my-picture').fadeTo('slow', 0.7);
}
  
function initalize() {
	
	set_up();
	var mobile = false;
	//to find out whether the site is being rendered on a mobile device or on a big screen
	var mql = window.matchMedia("screen and (max-width: 992px)");
	if (mql.matches){
		mobile = true;
	}
	var googleMap = '<div id="map"></div>';
	$("#mapDiv").append(googleMap);
	bindAboutEvents(mobile);
	create_education_details();
	create_work_experience_data();
	create_skills_data();
	bindEduEvents();
	bindExperienceEvents();
	bindSkillEvents();
	//Calls the initializeMap() function when the page loads
	window.addEventListener('load', initializeMap);

 	//Vanilla JS way to listen for resizing of the window
 	//and adjust map bounds
	window.addEventListener('resize', function(e) {
  	//Make sure the map bounds get updated on page resize
  	map.fitBounds(mapBounds);
	});
	bindScroller();
	
}

