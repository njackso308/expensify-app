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