let friends = require('../data/friends.js');
const reducer = (accumulator, currentValue) => accumulator + currentValue;

module.exports = function(app) {

  app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	app.post('/api/friends', function(req, res) {

		let match = {
			name: '',
			photo: '',
			difference: 1000
		};

	   let userData = req.body;
	   let userScore = userData.survey.reduce(reducer);

     console.log('userScore: ',userScore);

	   let totalDifference = 0;

	   for (var i = 0; i < friends.length; i++) {

	      for (var j = 0; j < friends[i].survey[j]; j++) {

		      totalDifference += Math.abs(userScore - parseInt(friends[i].survey[j]));

            console.log('totalDiff: ', totalDifference);

		       if (totalDifference <= match.difference) {
			          match.name = friends[i].name;
			          match.photo = friends[i].photo;
			          match.difference = totalDifference;
		            }
	         }
      }
		friends.push(userData);

	res.json(match);

	});
};
