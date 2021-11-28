<template>
  <v-footer
      dark
      padless
      color="white"
  >
    <v-card flat tile class="lighten-1 text-center">
      <v-card-text style="width: 100vw">
        <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    name: 'Footer',

    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>

<style scoped>

</style>
