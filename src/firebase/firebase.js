import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const myExpenses = [];

//     snapshot.forEach((childSnapshot) => {
//       myExpenses.push({
//         realId: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(myExpenses);
//   });

// // child removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').push(expenses[0]);
// database.ref('expenses').push(expenses[1]);
// database.ref('expenses').push(expenses[2]);

// database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// });

// setTimeout(() => {
//   database.ref('age').set(20);
// }, 4000);

// database.ref()
//   .once('value')
//   .then((snapshop) => {
//     const val = snapshop.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data.');
//   });

// database.ref().set({
//   name: 'Olaf Vaher',
//   age: 31,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google',
//   },
//   isSingle: false,
//   location: {
//     city: 'Bergen',
//     country: 'Norway',
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'location/city': 'Seattle',
//   'job/company': 'Amazon'
// });


// database.ref('attributes').set({
//   height: 189,
//   weight: 83,
// }).then(() => {
//   console.log('Data is saved.');
// }).catch((e) => {
//   console.log('Something went wrong.', e);
// });

// database.ref('stressLevel')
//   .remove()
//   .then(() => {
//     console.log('remove success');
//   })
//   .catch((e) => {
//     console.log('remove failed');
//   });

