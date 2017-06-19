// =============================================================
module.exports = function (app) {
	// dependencies
	var path = require("path");

	// Routes
	// =========================================================
	// Basic route that sends the user first to the home Page
	app.get('/', function (req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});
	// basic route to bring user to survey.html
	app.get('/survey', function (req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});
}