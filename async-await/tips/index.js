function request(num) { // mock HTTP request
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(num * 2)
    }, 1000)
  })
}

// request(1).then(res1 => {
//   console.log(res1) // it will print `2` after 1 second

//   request(2).then(res2 => {
//     console.log(res2) // it will print `4` after anther 1 second
//   })
// })

async function fn() {
  console.log(1)
  console.log(await request(1)) // 2
  console.log(await request(2)) // 4
  // print `2` and `4` at the same time
}
fn()
