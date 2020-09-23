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

// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = []

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses)
//   })

  // database.ref('expenses')
  // .on('value', )
  // .then((snapshot) => {
  //   const expenses = []

  //   snapshot.forEach((childSnapshot) => {
  //     expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     })
  //   })
  //   console.log(expenses)
  // })

// database.ref('expenses').push({
//   description: 'Rent',
//   note: "October's rent",
//   amount: 95000,
//   createdAt: 0
// })