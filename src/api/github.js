import axios from  'axios'
import jsCookie from 'js-cookie'

console.log(jsCookie.get('access_token'))

const instance = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 20000,
  headers: {
    'Authorization': 'token ' + '6ff4e5696a7c1a17b0102e985c71e2bd800d1785'
  }
})

instance.getUserRepos = async () => {
  return instance.get(`/user/repos?type=owner`)
}

instance.getUser = async () => {
  return instance.get('/user')
}

export default instance