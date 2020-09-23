import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyB_88DAH7keedgEELqCqo4NzMrRDl_MZv0",
  authDomain: "expensify-23b26.firebaseapp.com",
  databaseURL: "https://expensify-23b26.firebaseio.com",
  projectId: "expensify-23b26",
  storageBucket: "expensify-23b26.appspot.com",
  messagingSenderId: "196933200423",
  appId: "1:196933200423:web:f64e7aaa5ef20499c13c02",
  measurementId: "G-NN2C2N8Z4H"
}

firebase.initializeApp(config)

const database = firebase.database()

database.ref().set({
  name: 'Nick Jackson',
  age: 30,
  stressLevel: 6,
  job: {
    title: 'Software developer',
    company: 'Google'
  },
  location: {
    city: 'Rienzi',
    country: 'United States'
  }
}).then(() => {
  console.log('Data is saved.')
}).catch((err) => {
  console.log('This failed', err)
})

database.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Seattle'
})

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed')
//   }).catch((err) => {
//     console.log('Did not remove data')
//   })