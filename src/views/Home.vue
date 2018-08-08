<template>
  <div class="home">
    <ChooseList/>
  </div>
</template>

<script>
// @ is an alias to /src
import ChooseList from '@/components/PicWall.vue'

export default {
  name: 'home',
  components: {
    ChooseList
  }
}
</script>
