export const apiRequest = (url, options) => {
  return request(url, {
    ...options,
    header: {
      'Content-Type': 'applicaiton/json'
    }
  })
}

const request = (url, options) => {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(res => res.json())
      .then(resolve)
      .catch(reject)
  })
}
