// common funtion to make api call - used for redux-saga
export const apiRequest = (url, options) => {
  return request(url, {
    ...options,
    header: {
      'Content-Type': 'applicaiton/json'
    }
  })
}
// uses the fetch api to make rest API calls
const request = (url, options) => {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(res => res.json())
      .then(resolve)
      .catch(reject)
  })
}
