<template>
  <div class="container">
      <ul>
        <li>
          <a :href="photo.url" tarjet="_blank" rel="noopener noreferrer">
            {{photo.name}}
          </a>
          <img :src="photo.image" alt="">
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'photo',
  props: [ 'photo']

}
</script>

<style >
.container{
  width: 200px;
}
ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
}

  img{
    width: 120px;
    height: 120px;
  }

</style>
