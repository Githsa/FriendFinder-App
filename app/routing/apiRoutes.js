module.exports = function (app) {
	// dependencies
	var path = require("path");
	var friends = require('../data/friends.js');

	
	app.get('/api/friends', function (request, response) {
		
		response.json(friends);
	});

	app.post('/api/friends', function (req, response) {
		
		var totalDifferences = [];

		
    	for (var i =0; i < friends.length; i++){
    		var match = friends[i].scores;

    		
    		for (var j = 0; j < match.length; j++) {
    			var difference = 0;
    			
    			difference += Math.abs(req.body.scores[j] - match[j]);
    		}
    		
        	totalDifferences.push(difference);
        };

       
        var index = 0;
		var value = totalDifferences[0];

		function lowestIndex (array) {
			for (var i = 1; i < array.length; i++) {
	  			if (array[i] < value) {
	    			value = array[i];
	    			index = i;
	  			}
			};
			return index;
		};

		var myMatch = friends[lowestIndex(totalDifferences)];

		response.send(myMatch);
	});
};