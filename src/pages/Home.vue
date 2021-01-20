<template>
  <div id="home-page">home</div>
</template>

<script>
import github from '../api/github'
import { onCreated } from 'vue'
export default {
  setup () {
    onCreated(async () => {
      let { data = null } = await github.getUser()
    })

    return {}
  }
}
</script>

<style>

</style>