// Simple promise
// let p = new Promise((resolve, reject) => {
//     let a = 1 + 1
//     if (a == 2) {
//         resolve('It worked!')
//     } else {
//         reject('Rejected')
//     }
// })

// anything in .then will run for a resolve and .catch is what we get if it fails
// p.then((message) => {
//   console.log('Hi, I am the then ' + message)
// }).catch((message) => {
//   console.log('Hi, I am the catch ' + message)
// })


const imposterSyndrome = false
const giveUp = false

const hundredDaysOfCode = () => {
  return new Promise((resolve, reject) => {
    if (imposterSyndrome) {
        reject({
            message: 'This is normal. Keep at it!'
        })
    } else if (giveUp) {
        reject({
            message: 'Never give up. Never surrender.'
        })
    } else {
        resolve({
            message: 'Yay! You are on your way to becoming the greatest coder ever!'
        })
    }
  })
}

hundredDaysOfCode().then((message) => {
  console.log(message.message)
}).catch((error) => {
  console.log(error.message)
})
