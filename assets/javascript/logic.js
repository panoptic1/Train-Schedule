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

//Function for adding new trains with button
$("#add-train-btn").on("click", function(event) {
    event.preventDefault();
    
    //Grab user input
    var nameTrain = $("#train-name-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var firstArrival = $("#first-arrival-input").val().trim();
    var frequency = $("#frequency-input").val().trim();
    
    console.log(nameTrain);
    //Create an object to store input data
    var newTrain = {
        name: nameTrain,
        destination: destination,
        first: firstArrival,
        frequency: frequency,
    };

    console.log(newTrain);
});

//Create an object to store train input data




