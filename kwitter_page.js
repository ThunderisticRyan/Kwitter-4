const firebaseConfig = {
    apiKey: "AIzaSyD2G--CECvARUOvChLKgL5XajC0GipUfeA",
    authDomain: "mycity-wkmk.firebaseapp.com",
    databaseURL: "https://mycity-wkmk-default-rtdb.firebaseio.com",
    projectId: "mycity-wkmk",
    storageBucket: "mycity-wkmk.appspot.com",
    messagingSenderId: "340421583562",
    appId: "1:340421583562:web:849ad223e75dae5487ca33",
    measurementId: "G-5PC31XL1VP"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";