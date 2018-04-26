// Link to firebase database
var config = {
    apiKey: "AIzaSyCUjKVXWu5lkWCKXCmIQFz7EBN8leMOFas",
    authDomain: "train-schedule-5985f.firebaseapp.com",
    databaseURL: "https://train-schedule-5985f.firebaseio.com",
    projectId: "train-schedule-5985f",
    storageBucket: "",
    messagingSenderId: "942549111455"
};

firebase.initializeApp(config);

var database = firebase.database();

//Function for adding new trains with button
$("#add-train-btn").on("click", function(event) {
    event.preventDefault();
    
    //Grab user input
    var nameTrain = $("#train-name-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var firstArrival = moment($("#time").val().trim(), "HH:mm").format("HH:mm");
    var frequency = moment($("#frequency-input").val().trim(), "mm").format("mm");
    
    //Create an object to store input data
    var newTrain = {
        name: nameTrain,
        destination: destination,
        first: firstArrival,
        frequency: frequency,
    };

    //Upload train data to the database
    database.ref().push(newTrain);

    //Alert user that a train has been added
    alert("A new train route has been added.");

    //Clear out all of the input fields
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#time").val("");
    $("#frequency-input").val("");

});

//Create a firebase event that adds html element for train info in database.

database.ref().on("child_added", function(childSnapshot, prevChildKey){

    //Store all data into a variable
    var trainName = childSnapshot.val().name;
    var destination = childSnapshot.val().destination;
    var firstArrival = childSnapshot.val().first;
    var frequency = childSnapshot.val().frequency;
    
    //First Arrival converted
    var firstArrivalConverted = moment(firstArrival, "HH:mm").subtract(1, "years").format("HH:mm");

    //Create a variable for the current time
    var currentTime = moment();

    //Variable for difference between times
    var diffTime = moment().diff(moment(firstArrivalConverted), "minutes");
    
    //Variable for remainder
    var tRemainder = diffTime % frequency;
    
    // Minute Until Train
    var minutesTilTrain = frequency - tRemainder;
    
    // Next Train
    var nextTrain = moment().add(minutesTilTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

    // Add each train's data into the table
    $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" +
    firstArrivalConverted + "</td><td> Every " + frequency  + " minutes </td><td>" + moment(nextTrain).format("hh:mm") + "</td><td>" + minutesTilTrain + "</td></tr>");

 
});



