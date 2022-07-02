const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const routes = require('./routes');
const path = require('path');
const { createServer } = require('http');

const staticPath = __dirname + '/../public_html/';

const staticAssets = __dirname + '/../public_html/assets';
console.log(staticPath);

app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.use('/', express.static(staticPath));
app.use('/assets', express.static(staticAssets));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// This is to serve backend API's
app.use('/api', routes); 

app.get('*', function (req,res) {
    console.log(staticPath);
    const indexFile = path.resolve(__dirname + '/../public_html/index.html');
    res.sendFile(indexFile);
});


// // This is to serve angular app.
// app.use('/', express.static('public_html'));

// Catch all other routes and return the index file
// app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'public_html/index.html'));
//  });

// app.use((request, response, next) => {
//   console.log(request.headers);
//   next();
// });

// app.use((request, response, next) => {
//   request.chance = Math.random();
//   next();
// });

const server = createServer(app);

server.listen(3000, function(){
	console.log('Listening to port 3000');
    app.use((req, res) => {
        console.log('static path');
        res.sendFile(path.join(__dirname, '/../public_html', 'index.html'));
    })
});
