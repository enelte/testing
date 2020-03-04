import axios from 'axios'

export function postUser(data) {
  console.log(JSON.stringify(data))
  let resp = {}
  axios
    .post('https://reqres.in/api/users', data)
    .then(function(response) {
      resp = response.data
      console.log('aaaaaaaaaaaaaaaaaaaaaa' + JSON.stringify(resp))
    })
    .catch(function(error) {
      console.log(error)
    })
  return resp
}
