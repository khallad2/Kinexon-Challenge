import fs from 'fs'; //Lets require import the FS module
import  express  from "express"; // Express is our web framework for building a rest API
import cors from "cors";
import nodestatic from 'node-static';
import randopeep from 'randopeep';
import http from 'http';
import driverRouts  from './routes/drivers.js';
import {} from 'dotenv/config';
const  app = express();
app.use(cors()); // enable CORS to allow requests from frontend
app.use('/', driverRouts); // include driverRouts

var file = new nodestatic.Server('../app');

// initialize file with empty array - strignyfied
fs.writeFileSync("./index.get.json", '[]');

/**
* randopeep is for generating stuff that we can include in our fake data.
**/
const generateObject = () => {
    let drivers = readFile('./index.get.json', 'utf8');
    let driver = {

        id: Math.floor(Math.random() * (10000 - 1000)) + 1000,
        driverName: randopeep.name(),
        driverCityOrigin: randopeep.address.city(),
        "driverLanguage": ['de', 'en', 'nl', 'fr', 'es', 'ar'][Math.floor(Math.random()*7)],
        driverPhone: randopeep.address.phone(),
        "driverGender": ['male', 'female'][Math.floor(Math.random()*2)],
        driverInfo: randopeep.corporate.catchPhrase(0),
        carMake: randopeep.corporate.name('large', 0),
        "kmDriven": Math.floor(Math.random() * 100000),
        'location': randopeep.address.geo()
    };
    drivers.push(driver);
    writefile("./index.get.json", JSON.stringify(drivers));
}

//Generate 10 objects to work with in the backend for the front end
for (let i = 0; i <10; i++) {
    generateObject();
}

/**
 * Generate random number in range to randomly update locations
 * @param to
 * @param from
 * @returns {number}
 */
const getRandomInRange = (to, from) => {
    to = parseFloat(to) + .0005;
    from = parseFloat(from) ;
    return (Math.random() * (to - from) + from).toFixed(4) * 1;
}

/**
 * handle interval
 * @type {number}
 */
const interval = setInterval(() => {
    let drivers = readFile("./index.get.json", 'utf8');
    if(drivers.length <= 0) return 0;

    //Move object location random every 5 seconds
    drivers.map((driver) => {
       return driver.location = [
            getRandomInRange(driver.location[0], driver.location[0]).toString(),
            getRandomInRange(driver.location[1], driver.location[1]).toString()
        ];
    });

    writefile("./index.get.json", JSON.stringify(drivers))

}, 5000);

/**
 * Write to file
 * @param path
 * @param data
 */
function writefile(path, data) {
    try {
        fs.writeFileSync(path, data);
        console.log('Location updated Randomly!')
    } catch (err) {
        console.log(err);
    }
}

/**
 * Read file data
 * @param path
 * @param encoding
 * @returns {*|[]}
 */
function readFile(path, encoding) {
    let drivers = [];
    try {
        drivers = JSON.parse( fs.readFileSync(path, encoding));
        return drivers;
    } catch ( err ) {
        console.log(err);
    }
}

// Create the server for serving static files (html, css etc.)
http.createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        clearInterval(interval);
        file.serve(request, response);
    }).resume();
}).listen(8080);

// Start the REST API server
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log(`API Server is running`)
});
