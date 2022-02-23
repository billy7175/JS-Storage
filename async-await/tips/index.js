function request(num) { // mock HTTP request
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(num * 2)
    }, 1000)
  })
}

request(1).then(res1 => {
  console.log(res1) // it will print `2` after 1 second

  request(2).then(res2 => {
    console.log(res2) // it will print `4` after anther 1 second
  })
})