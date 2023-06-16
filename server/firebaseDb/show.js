//Loading Firebase Package
var firebase = require("firebase/app");
var firebasedb = require("firebase/database");

/**
* Update your Firebase Project
* Credentials and Firebase Database
* URL
*/

const firebaseConfig = {
    apiKey: "AIzaSyDhaKh0v1SY2zMr-jfT-TRkjsyQb0I5-ws",
    authDomain: "live-result-235df.firebaseapp.com",
    databaseURL: "https://live-result-235df-default-rtdb.firebaseio.com",
    projectId: "live-result-235df",
    storageBucket: "live-result-235df.appspot.com",
    messagingSenderId: "265886718567",
    appId: "1:265886718567:web:b54125e6b172104ce112c2",
    measurementId: "G-E19GCCCFYE"
};  //by adding your credentials, you get authorized to read and write from the database

var app = firebase.initializeApp(firebaseConfig)
/**
* Loading Firebase Database and refering 
* to user_data Object from the Database
*/
var db = firebasedb.getDatabase(app);
var ref = firebasedb.ref(db, "current")
// firebasedb.get(ref).then((snapshot) => {
//     if (snapshot.exists()) {
//       console.log(snapshot.val());
//     } else {
//       console.log("No data available");
//     }
//   }).catch((error) => {
//     console.error(error);
//   });

firebasedb.onValue(ref, (snapshot) => {
    const data = snapshot.val();
    if (data == 'no data') {
        console.log('show end');
    } else {
        DateFiff = (new Date().getTime())/1000 - (data.startTime)/1000
        console.log(DateFiff);
        if (DateFiff < 3) {
            console.log("Bedore", data);
            setTimeout(() => {
                console.log("After", data);
            }, 1000);
        } 
        else {
            console.log("After", data);
        }



    }
});

