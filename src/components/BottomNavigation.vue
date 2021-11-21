<template>
  <v-bottom-navigation
      v-model="value"
      :background-color="color"
      dark
      shift
  >
    <v-btn>
      <span>Usuários</span>

      <v-icon>mdi-account</v-icon>
    </v-btn>

    <v-btn>
      <span>Produtos</span>

      <v-icon>mdi-archive</v-icon>
    </v-btn>

    <v-btn>
      <span>Eixos</span>

      <v-icon>mdi-axis-x-arrow</v-icon>
    </v-btn>

  </v-bottom-navigation>
</template>

<script>
  export default {
    name: 'SystemBar',

    data: () => ({ value: 1 }),

    computed: {
      color () {
        switch (this.value) {
          case 0: return 'blue-grey'
          case 1: return 'teal'
          case 2: return 'brown'
          default: return 'blue-grey'
        }
      },
    },
  }
</script>

<style scoped>

</style>
