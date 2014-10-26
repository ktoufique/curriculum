
/**
 * Module dependencies.
 */

 var express = require('express');
 var routes = require('./routes');
 var user = require('./routes/user');
 var http = require('http');
 var path = require('path');
 var mongoose = require('mongoose');
 var fs = require('fs');


 var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
	mongoose.connect('mongodb://dbuser2:123456@ds039088.mongolab.com:39088/feelingthis');
}

/*var models = [];

fs.readdirSync(__dirname + '/models').forEach(function(filename){
	if (~filename.indexOf('.js')) {
		models.push(require(__dirname + '/models/' + filename));
	};
});*/

var stories = require('./models/cvStory');
var first = require('./models/first-fill');

//first.fill();

/*app.get('/users', function(req, res){
	mongoose.model('users').find(function(err, users){
		res.send(users);
	})
});

app.get('/posts', function(req, res){
	mongoose.model('posts').find(function(err, posts){
		res.send(posts);
	})
});*/

app.get('/cvStories', function(req, res){
	mongoose.model('cvStories').find(function(err, cvStories){
		res.send(cvStories);
	})
});



app.get('/pushData', function(req, res){
/*	var Story = mongoose.model('cvStories');

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

story.save(function (err) {if (err) console.log ('Error on save!')});*/
res.send('ok');
})

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});
