<template lang="pug">

  li
    h2: a(:href="photo.url" tarjet="_blank")
     | {{photo.title}}
    img(:src="photo.thumbnailUrl")
</template>

<script>
export default {
  name: 'photo',
  props: [ 'photo']

}
</script>

<style >
  li{
    display: block;
    margin: 2px 0;
    justify-self: center;
    text-align: center;
  }

</style>
