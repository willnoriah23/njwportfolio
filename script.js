$(document).ready(function() {
	
	$("#aboutMe").on("click", function() {

		var me = "<h5>My name is Noriah Williams and I'm a full stack software developer from Atlanta, GA. I graduated from the Georgia Tech Code Bootcamp with the goal of learning a tangiable skill that is both analytical and creative. When I'm not developing, I enjoy long walks on the beach, volunteering with Hands on Atlanta TeamWorks, long-form journalism, lifting heavy stuff at the gym and gummy candy.</h5>"
	
	$(".stuffDiv").html(me);
	
	});


	$("#resume").on("click", function() {

		var experience = '<h4>Professional Experience</h4> \
		<br> <h6><em>Administrative Client Support Specialist, OxBlue Corporation</em></h6> \
		<h5>Atlanta, GA • April 2016 – Present</h5> \
		<ul><li> \
		<h5>• Provide internal support to department director and eight Client Support Managers to ensure exceptional customer experience</h5> \
		<h5>• Research and coordinate 3rd party contractors to meet installation deadlines throughout the United States</h5> \
		<h5>• Built and maintain SQL queries for distribution of customer surveys and targeted marketing material</h5> \
		<h5>• Collaborated with development team to utilize PHP and Vue.js to complete tasks for new client-facing interface</h5> </li> </ul> \
		<br> <h6><em>Regional Coordinator, Otis Elevator Company</em></h6> \
		<h5>Atlanta, GA • May 2014 – April 2016</h5> \
		<h5>• Manage accounts payable for over 40 business offices, including invoice payment and vendor management</h5> \
		<h5>• Developed training documentation to standardize a newly implemented nationwide billing system and conducted procedure training</h5> <br> \
		<h6><em>Public Relations Coordinator, Eberly & Collard Public Relations</em></h6> \
		<h5>Atlanta, GA • October 2013 – March 2014</h5> <ul><li> <br> \
		<h6><em>Intern Reporter, Mackinac Island Town Crier</em></h6> \
		<h5>Mackinac Island, MI • May 2013 – September 2013</h5> </li></ul> <br> \
		<h4>Education</h4> <br> \
		<h6>Georgia Institute of Technology • Atlanta, GA • August 2017 – February 2018</h6> \
		<h5><em>Georgia Tech Coding Bootcamp ­ Full Stack Web Development</em></h5> \
		<h5>Full-stack web development bootcamp program dedicated to web design and building applications in an intensive 24-week curriculum. Languages learned included CSS, HTML, Javascript, jQuery, Firebase, Node.js, mySQL, Express and React.js.</h5> <br> \
		<h6>Michigan State University • East Lansing, MI 2013</h6> <h5><em>Bachelor of Arts, Journalism</em></h5>'
		
	$(".stuffDiv").html(experience);	
	
	});


	$("#folio").on("click", function() {

		var portfolio =   '<div class="row"> \
						    <div class="col s6"> \
						      <div class="card large"> \
						        <div class="card-image"> \
						          <img class="responsive-img" img src="./assets/img/shameless.png"> \
						        </div> \
						        <div class="card-content"> \
						        <p>An engaging "clicky" memory game built with React.js and based on the colorful characters of the show Shameless.</p> \
						        </div> \
						        <div class="card-action"> \
						          <center><a href="https://shameless-clicks.herokuapp.com/3" target="_blank" class="blue-grey-text">Shameless Clicks</a></center> \
						        </div> \
						      </div> \
						    </div> \
						    <div class="col s6"> \
						      <div class="card large"> \
						        <div class="card-image"> \
						          <img class="responsive-img" img src="./assets/img/giftastic.png"> \
						        </div> \
						        <div class="card-content"> \
						          <p>An app that utilizes the GIPHY API and Javascript to call gifs of your favorite TV character.</p> \
						        </div> \
						        <div class="card-action"> \
						          <center><a href="https://willnoriah23.github.io/giftastic/" target="_blank" class="blue-grey-text">Giftastic</a></center> \
						        </div> \
						      </div> \
						    </div> \
						    <div class="col s6"> \
						      <div class="card large"> \
						        <div class="card-image"> \
						          <img class="responsive-img" img src="./assets/img/slhearnsinteriordesign.png"> \
						        </div> \
						        <div class="card-content"> \
						          <p>Website for Ann Arbor, MI-based interior designer, built with React.js and Materialize to showcase portfolio and allows clients to log in and upload photos of their dream home decor.</p> \
						        </div> \
						        <div class="card-action"> \
						          <center><a href="https://slhearnsinteriordesign.herokuapp.com/" target="_blank" class="blue-grey-text">SL Hearns Interior Design</a></center> \
						        </div> \
						      </div> \
						    </div> \
						     <div class="col s6"> \
						      <div class="card large"> \
						        <div class="card-image"> \
						          <img class="responsive-img" img src="./assets/img/fasttrack.png" target="_blank"> \
						        </div> \
						        <div class="card-content"> \
						          <p>Project built with Javascript and utilizing Firebase to host arrival and departure data for a fictional train station, with the ability to manipulate information with Moment.js.</p> \
						        </div> \
						        <div class="card-action"> \
						          <center><a href="https://willnoriah23.github.io/train-activity/" target="_blank" class="blue-grey-text">Fast Track</a></center> \
						        </div> \
						      </div> \
						    </div> \
						  </div>'


	$(".stuffDiv").html(portfolio);					  

	});


});	