<template>
  <div>
    <Myheader />
    <nuxt />
    <myfooter />
  </div>
</template>

<script>
import Myheader from '~/components/Myheader.vue'
import myfooter from '~/components/myfooter.vue'
export default {
  name: 'Default',
  components: {
    Myheader,
    myfooter
  }
}
</script>
