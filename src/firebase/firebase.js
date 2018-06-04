import * as firebase from 'firebase';
import expenses from '../tests/fixtures/expenses';

const config = {
  apiKey: 'AIzaSyBHsHmsgJ7BjSluK-Y-fNO8SmTgHnlyCss',
  authDomain: 'expensify-9f3be.firebaseapp.com',
  databaseURL: 'https://expensify-9f3be.firebaseio.com',
  projectId: 'expensify-9f3be',
  storageBucket: 'expensify-9f3be.appspot.com',
  messagingSenderId: '728362608223'
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref('expenses')
  .on('value', (snapshot) => {
    const myExpenses = [];

    snapshot.forEach((childSnapshot) => {
      myExpenses.push({
        realId: childSnapshot.key,
        ...childSnapshot.val()
      });
    });

    console.log(myExpenses);
  });

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

