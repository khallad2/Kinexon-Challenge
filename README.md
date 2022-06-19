# Kinexon Coding Challenge

## What is this about?
This challenge is part of the Kinexon interview process for web developers. It gives you the opportunity to show
us your skills, interests, motivation and how you work in general.

## What is included?
- Backend enhance (refactoring code, naming conventions)
- Backend response modify for pagination
- Frontend components for rendering data from APIs
- Responsive UI 
- Pagination
- live update of locations every 5 seconds

### Back end
I took node.js Backend and angular Frontend projects

### Front end
Simple Frontend to render and paginate the data from the backend, 
based on the TODO: in the backend so the location 
is getting updated every 5 second. 

## How long did it take?
3 hours of implementation

## How to run the code?
in the root directory 
1. `chmod 755 start_node_backend.sh`
2. `./start_node_backend.sh`
3. `chmod 755 start_angular_app.sh`
4. `./start_angular_app.sh`

in ./angular-app
 - `ng test`

### Prerequisites
The following commands and the start scripts were written for Unix-like operating systems (Linux and macOS). If you're using Windows, you might need to change a thing or two. Please let us know if you need help with that or with running the code in general.
Make sure that you have Node.js and npm installed on your system and that both are available in your path (console path).


### Running the Node.js back end
To start the Node.js back end, you can simply run the `start_node_backend.sh` shell script. Type the following in your
console:

1. `chmod 755 start_node_backend.sh` (this only has to be run once)
2. `./start_node_backend.sh`

This script installs all required packages and starts two servers.

The first server offers the REST API and runs on port 3000. You can retrieve the driver location data using the
following route:  
GET `http://localhost:3000`  
The response is a list of objects containing some information and geographical positions.

The second server serves static files from the `app` directory. To see the `index.html` access the following url:  
`http://localhost:8080`

### Running the Angular front end
If you decide to use the provided angular application, simply run the `start_angular_app.sh` shell script. Type the 
following in your console:

1. `chmod 755 start_angular_app.sh` (this only has to be run once)
2. `./start_angular_app.sh`
3. `cd angular-app` & `ng test`

The front end can be accessed under the following url:
`http://localhost:4200`

The front end will automatically reload if you change something in your code.

This empty angular front end has been generated using the angular-cli. For more infos
see [Angular Tutorial](https://angular.io/tutorial/toh-pt0).


### what is missing
    - id attribute of IDrive & Driver model should be UUID instead of number 
    - test coverage 100%
    - mongo DB to store the data
    - UI/UX enhances 
