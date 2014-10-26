var stories = require('./cvStory');
var mongoose = require('mongoose');

exports.fill = function(){

	var Story = mongoose.model('cvStories');
	Story.remove({}, function(err) {
		if (err) {
			console.log ('error deleting old data.');
		}
	});

	var story = new Story({
		title:{head:"Karim Toufique", description:"Engineering Student | Telecommunications | ktoufique@enseirb-matmeca.fr"}
		,
		intro:
		[
		{name:"ABOUT", description:"I'm an engineering student at ENSEIRB-MATMECA."},
		{name:"EDUCATON", description:"Networking, Software Engineering, Signal Processing and Digital Communications."},
		{name:"& PASSION", description:"Passionate about Cinema and Litterature."}
		]
		,
		jobsEducation :{
			education : 
			[
			{who:"Engineering School", where:"ENSEIRB-MATMECA", when:"GRADUATING IN NOVEMBER 2015", what:"3 Years Course - Telecommunications", current: true},
			{who:"Post-Secondary Preparatory School", where:"Lycée Saint Stanislas (Nantes, FRANCE) - Lycée Blaise Pascale(Clermont Ferrand, FRANCE)", when:"2010 - 2012", what:"2 Years Course Preparing for Entrance Examinations to the French Grandes Ecoles.", current: false}
			]
			,
			jobs : [
			{who:"Web Developper - Intern", where:"COMPTALIA - ECOLEMS (Montpellier, FRANCE)", when:"JUNE - SEPTEMBER 2014" ,what:"Design of a Web Interface in Bootstrap/AngularJS that is fed with data by ASP .NET. This interface is designed to generate e-mails and PDF documents and send them to clients.", current:false},
			{who:"Networking - Intern", where:"ATENTO - Telefónica (Casablanca, MOROCCO)", when:"JULY 2013", what:"Network maintenance in the Call Center, and made tests on new Asterisk Server Features.", current:false}
			]
			,
			skills : [
			{tech:"ASP .NET | SQL", subject:"Web Service Like, Acess to SQL Db and data Serialization.", client:"COMPTALIA-ECOLEMS", clientLink:"http://www.comptalia.com/"},
			{tech:"PHP  | SQL", subject:"Spliwise like Web app.", client:"ENSEIRB-MATMECA", clientLink:""},
			{tech:"Java | MongoDb", subject:"Web Service in Java/JEE for Android App for rss feed reading.", client:"COMPTALIA-ECOLEMS", clientLink:"http://enseirb-matmeca.fr/"},
			{tech:"AngularJS | Bootstrap", subject:"Developpers montoring Dashboard (Harmony Framework).", client:"ENSEIRB-MATMECA", clientLink:"http://enseirb-matmeca.fr/"},
			{tech:"Asterisk", subject:" VoIP server setup under Linux/Ubuntu.",client:"ATENTO", clientLink:"http://www.atento.com/"},
			{tech:"C", subject:"Multi-threading, Networking and Operating Systems.",client:"ENSEIRB-MATMECA", clientLink:"http://enseirb-matmeca.fr/"},
			{tech:"101s", subject:"System Dependability, Privacy, Distributed Algorithms, Mathematics...",client:"ENSEIRB-MATMECA", clientLink:"http://www.enseirb-matmeca.fr/syllabus/index.php?departement=T&langage=EN"}
			]
		}
		,
		contact:{}
	});

story.save(function (err) {if (err) console.log ('Error on save!')});
}