<script lang="ts">
import LoginButton from './LoginButton.vue'
export default {
  components: {
    LoginButton
  }
}
</script>

<template>
  <div class="flex flex-row gap-6 mx-20 p-4 border-b justify-between">
    <div class="flex flex-row gap-6 align-bottom">
      <router-link to="/" class="text-xl font-bold">Spotifyer</router-link>
      <router-link to="/about" class="">About</router-link>
    </div>
    <LoginButton />
  </div>
</template>
