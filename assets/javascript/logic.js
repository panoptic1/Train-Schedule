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
    var firstArrival = moment($("#time").val().trim(), "HH").format("X");
    var frequency = $("#frequency-input").val().trim();
    
    //Create an object to store input data
    var newTrain = {
        name: nameTrain,
        destination: destination,
        first: firstArrival,
        frequency: frequency,
    };

    //Upload train data to the database
    database.ref().push(newTrain);

    console.log(newTrain.first);

    //Alert user that a train has been added
    alert("A new train route has been added.");

    //Clear out all of the input fields
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#time").val("");
    $("#frequency-input").val("");
});

//Create an object to store train input data




