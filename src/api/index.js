// import config from './config'

// const { apiKey } = config
const URL = `https://jsonplaceholder.typicode.com/photos?_limit=15`;
// const URL = `https://picsum.photos/v2/list?page=2&limit=10`

export default function getphotos() {
 return fetch (URL)
  .then (res => res.json())
  .then (json => (json))
}
