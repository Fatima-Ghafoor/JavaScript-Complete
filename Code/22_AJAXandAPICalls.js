/* To see the results, link this file to your .html file and check the output in Inspect -> Console. */

/* XML HTTP REQUEST */

// XMLHttpRequest is a built-in JavaScript object that allows a web page to send requests to a server and receive data without reloading the page. It is mainly used to fetch or send data in the background and update parts of a web page dynamically.

// How it works?
// 1) A request object is created in JavaScript.
// 2) The request is configured with the request type (like GET) and the server address.
// 3) The request is sent to the server.
// 4) The server sends back data.
// 5) JavaScript receives the response and uses it without refreshing the page.

const request = new XMLHttpRequest();

request.open("GET", "https://jsonplaceholder.typicode.com/posts/1");

request.onload = function(){
    if(request.status === 200){
        console.log(request.responseText);
    }
    else{
        console.log("Request Failed!");
    }
};
request.send();

/* FETCH() METHOD */

// fetch() is a modern JavaScript method used to request data from a server and receive a response without reloading the page. It works using promises, making asynchronous code easier to read and manage compared to older methods like XMLHttpRequest.

// How it works?
// 1) fetch() sends a request to a server.
// 2) The server responds with data.
// 3) The response is converted into usable format (like JSON).
// 4) JavaScript uses the data while the page stays open.

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log("Error: ", error)
    });

/* WORKING WITH JSON */

// JSON (JavaScript Object Notation) is a lightweight data format used to store and exchange information between a server and a web application. It is easy for humans to read and easy for machines to understand and process.
// One-liner: Structured data that travels between servers and JavaScript.

const data = {
    "userId": 1,
    "id": 1,
    "title": "Hello World!",
    "body": "This is my first post!"
}

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())  // Convert JSON to JavaScript object
    .then(data => {
        console.log("Post Title:", data.title);
        console.log("Post Body:", data.body);
    })
    .catch(error => {
        console.log("Error: ", error);
    });

/* GET & POST REQUESTS */

// GET Request: It is used to retrieve (read) data from a server without changing anything on it.

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => {
        console.log("Fetched Data: ", data);
    })
    .catch(error => console.log("Error: ", error));

// POST Request: It is used to send data to a server, usually to create or submit new information.

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "My New Post",
        body: "This is created using POST",
        userId: 1
    })
})
    .then(response => response.json())
    .then(data => {
        console.log("Created Post: ", data);
    })
    .catch(error => console.log("Error: ", error));

/* HANDLING ERRORS IN fetch() */

// Error Handling in fetch() means checking whether a request was successful and properly handling situations where the request fails due to network issues, server errors, or invalid responses.

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => {
        if (!response.ok){
            throw new Error("Server Error: " + response.status);
        }
        return response.json();
    })
    .then(data => {
        console.log("Fetched Data: ", data);
    })
    .catch(error => {
        console.log("Error Occured: ", error.message);
    });

/* USING PUBLIC APIs */

// A Public API is an interface provided by an organization or service that allows developers to access their data or functionality over the internet using requests like GET and POST.

fetch("https://api.open-meteo.com/v1/forecast?latitude=24.86&longitude=67.01&current_weather=true")
    .then(response => response.json())
    .then(data => {
        console.log("Current Temperature: ", data.current_weather.temperature, "°C");
        console.log("Wind Speed: ", data.current_weather.windspeed, "km/h");
    })
    .catch(error => console.log("Error: ", error));