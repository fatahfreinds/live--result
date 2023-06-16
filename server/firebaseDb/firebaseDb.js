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
// var ref = db.ref("/user_data");  //Set the current directory you are working in

/**
* Setting Data Object Value
*/
// writing data
var ref = firebasedb.ref(db, "user_data")
firebasedb.set(ref, { username: 'ae' }).then(() => {
    console.log('saved');
})
    .catch((error) => {
        console.log(error);
    });

//   reading data
firebasedb.onValue(ref, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
});
firebasedb.onChildAdded(firebasedb.child(firebasedb.ref(db), 'posts'), (snapshot) => {
    const changedPost = snapshot.val();
    console.log(changedPost);
    // console.log('The updated post title is ' + changedPost);
})
// updating data
const newPostKey = firebasedb.push(firebasedb.child(firebasedb.ref(db), 'posts')).key;
var ko = {
    'asdf': 'asdf',
    '123': 123
}
const updates = {};
updates['/posts/' + newPostKey] = ko;
updates['/user-posts/' + '12345' + '/' + newPostKey] = ko;
firebasedb.update(firebasedb.ref(db), updates)

// ref.on('child_changed', (snapshot) => {
//     const changedPost = snapshot.val();
//     console.log('The updated post title is ' + changedPost.title);
//   });
firebasedb.onChildRemoved(firebasedb.ref(db, 'posts'), (snapshot) => {
    console.log('remove');
    const changedPost = snapshot.val();
    console.log(changedPost);
    // console.log('The updated post title is ' + changedPost);
})
firebasedb.remove(firebasedb.child(firebasedb.ref(db), 'posts/' + newPostKey))


// ref.set([
//     {
//         id: 20,
//         name: "Jane Doe",
//         email: "jane@doe.com",
//         website: "https://jane.foo.bar"
//     },
//     {
//         id: 21,
//         name: "John doe",
//         email: "john@doe.com",
//         website: "https://foo.bar"
//     }
// ]);

// /**
// * Pushing New Value
// * in the Database Object
// */
// ref.push({
//     id: 22,
//     name: "Jane Doe",
//     email: "jane@doe.com",
//     website: "https://jane.foo.bar"
// });

// /**
// * Reading Value from
// * Firebase Data Object
// */
// ref.once("value", function (snapshot) {
//     var data = snapshot.val();   //Data is in JSON format.
//     console.log(data);
// });

