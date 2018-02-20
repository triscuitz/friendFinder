const express = require('express');
const bodyParser = require('body-parser');

let app = express();

const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


require("./app/routing/apiRoutes")(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT, function() {
  console.log('App listening on PORT: ' + PORT);
});
