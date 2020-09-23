const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Nick',
      age: 30
    })
    // reject('Something went wrong')
  }, 5000)
})

promise.then((data) => {
  console.log(data)
  return 'some data'
}).then((str) => {
  console.log('does this run?', str)
}).catch((err) => {
  console.log('Error: ', err)
})