// Initialize Firebase
var config = {
  apiKey: "AIzaSyDf1bttDiMJ3HTis2h9PdcrpjNRo7en1Ck",
  authDomain: "tutor-61e6e.firebaseapp.com",
  databaseURL: "https://tutor-61e6e.firebaseio.com",
  projectId: "tutor-61e6e",
  storageBucket: "tutor-61e6e.appspot.com",
  messagingSenderId: "998613438456"
};
firebase.initializeApp(config);

// Create messages collection
var messageRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();
  /* TEST
  console.log(123);
  */

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var subject = getInputVal('subject');
  var message = getInputVal('message');

  // TEST
  console.log(name);
  
 
  // Save message
  saveMessage(name, email, subject, message);
  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  }, 3000)

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, subject, message) {
  var newMessageRef = messageRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    subject: subject,
    message: message,
  })
}