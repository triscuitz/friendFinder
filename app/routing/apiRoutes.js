let friends = require('../data/friends.js');

module.exports = function(app) {

  app.get('/api/friends', function(req,res){
    res.json(friends);
  });

  app.post('/api/friends', function(req, res){

      let bestie = {
        name: '',
        photo: '',
        scoreDiff: 1000
      };

      console.log(req.body);

      let userData = req.body;
      let userScore = userData.survey;

      console.log(userScore);

      let totalDiff = 0;

      for (var i = 0; i < friends.length; i++) {
        console.log(friends[i]);
        totalDiff = 0;

        for (var z = 0; z < friends[i].survey[z]; z++) {


        totalDiff += parseInt(userScore[z]) - parseInt(friends[i].survey[z]);

        if (totalDiff <= bestie.scoreDiff) {
            bestie.name = friends[i].name;
            bestie.photo = friends[i].photo;
            bestie.scoreDiff = totalDiff;
          }
        }
      }
      friends.push(userData);

      res.json(bestie);
  });

};
