// import config from './config'

// const { apiKey } = config
// const URL = `https://jsonplaceholder.typicode.com/users?_limit=15`;
// const URL = `https://picsum.photos/v2/list?page=2&limit=10`;
const URL = `https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12`;

export default function getphotos() {
 return fetch (URL)
  .then (res => res.json())
  .then (json => (json))
}
