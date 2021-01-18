let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve('It worked!')
    } else {
        reject('Rejected')
    }
})

// anything in .then will run for a resolve and .catch is what we get if it fails
p.then((message) => {
  console.log('Hi, I am the then ' + message)
}).catch((message) => {
  console.log('Hi, I am the catch ' + message)
})