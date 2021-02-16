<template lang="pug">
#app
  h1 VuePhotos
  spinner(v-show="loading")
  ul
      photos(v-for='photo in photos'
      v-bind:photo="photo")


</template>

<script>
import getphotos from './api'
import Photos from './components/Photos.vue'
import Spinner from './components/Spinner.vue'
export default {
  name: 'app',
  data () {
    return {
     photos:  [],
     loading: true
    }
  },
  components: {
    Photos,
    Spinner
  },
  methods: {
    getPhotos () {
      getphotos ()
        .then(res => {
          this.photos = res
          //this.loading = false
          console.log(res)
        })
      }
  },
      mounted: function () {
        this.getPhotos();
      }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  text-decoration: none;
}
a {
  color: #42b983;
}
</style>
