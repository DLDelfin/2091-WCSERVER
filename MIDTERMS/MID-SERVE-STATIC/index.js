//1. Install Express
//2. Installing Libraries/ dependencies
//3. Require statements

const express = require('express');
const app = express();

//4. use the middleware required for serving static files

app.use(express.static('public'));

//5. Create the route to serve a static index.html

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/' + 'index.html');
});

//Setting the listener to ENV port info

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
