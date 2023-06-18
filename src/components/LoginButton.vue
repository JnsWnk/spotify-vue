<script lang="ts">
export default {
  methods: {
    // Mandatory functions from Spotify API docs: https://developer.spotify.com/documentation/web-api/tutorials/code-pkce-flow
    generateRandomString(length: number) {
      let text = ''
      let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

      for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
      }
      return text
    },

    loginSpotify() {
      const clientId = 'e4a830e15bf94df8a8e6b5e57000e549'
      const redirectUri = 'http://localhost:8000/callback'

      let state = this.generateRandomString(16)
      let scope = 'user-read-private user-read-email'

      let args = new URLSearchParams({
        response_type: 'code',
        client_id: clientId,
        scope: scope,
        redirect_uri: redirectUri,
        state: state
      })

      window.location.href = 'https://accounts.spotify.com/authorize?' + args
    }
  }
}
</script>

<template>
  <div>
    <button @click="this.loginSpotify" class="border rounded-lg p-2 bg-green-600 text-white">
      Login
    </button>
  </div>
</template>
