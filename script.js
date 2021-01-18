let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve('It worked!')
    } else {
        reject('Rejected')
    }
})

