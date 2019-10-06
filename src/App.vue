<template>
  <v-app class="grey lighten-1">
      <v-content> <!-- page content -->
      <v-parallax height=1080 src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
      <v-body>Upper Echelon</v-body>
      </v-parallax>
    </v-content>
    
    <Navbar />
  </v-app>
</template>

<script>

import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: { Navbar },
  data () {
    return {
      //
    }
  }
}
</script>
