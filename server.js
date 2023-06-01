const path = require('path');
const express = require('express');
const app = express();
const port = 4000;

app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
//   res.sendFile(__dirname + '/blogs.html');
// });

// const folderName = 'Site';
// const folderPath = path.join(__dirname, folderName);



app.listen(port, () => {
  console.log(`http://localhost:4000 ${port}`);
});
