var express = require('express'); //Ensure our express framework has been added
var app = express();
var bodyParser = require('body-parser'); //Ensure our body-parser tool has been added
app.use(bodyParser.json());              // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//Create Database Connection
var pgp = require('pg-promise')();

const dbConfig = {
	host: 'db',
	port: 5432,
	database: 'football_db',
	user: 'postgres',
	password: 'pwd'
};

var db = pgp(dbConfig);

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));//This line is necessary for us to use relative paths and access our resources directory


// home page
app.get('/', function(req, res) {
	res.render('pages/NCARHome',{
		local_css:"home.css",
		my_title:"Home Page"
	});
});

app.get('/lesson', function(req, res) {
	res.render('pages/lesson',{
		local_css:"lesson.css",
		my_title:"Lesson Page"
	});
});


  
 app.listen(3000);
 console.log('3000 is the magic port');