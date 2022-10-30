<template>
  <v-app>
    <v-main>
      <authorization/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Authorization from './view/Authorization.vue'

export default defineComponent({
  name: 'App',

  components: {
    Authorization,
  },

  data () {
    return {
      //
    }
  },
})
</script>
