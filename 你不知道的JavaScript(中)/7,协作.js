let res = []

function response(data) {
  let chunk = data.splice(0, 1000)

  res = res.concat(chunk.map(val => val * 2))

  if(data.length > 0) {
    setTimeout(()  => {
      response(data)
    })
  }
}