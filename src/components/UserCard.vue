<template>
  <v-card
      class="mx-auto"
      max-width="344"
  >
    <v-img
        :src="image"
        height="200px"
    ></v-img>

    <v-card-title>
      {{ name }}
    </v-card-title>
      Cadastrado à {{ likes }} anos
    <v-card-subtitle>

    </v-card-subtitle>

    <v-card-actions>
      <v-btn
          @click="show = !show"
          color="orange lighten-2"
          text
      >
        More
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
          icon
          @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
            <strong>Email:</strong> {{ email }} <br>
            <strong>Phone:</strong> {{ phone }} <br>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: 'UserCard',

  props: [
    "name",
    "image",
    "likes",
    "email",
    "phone"
  ],

  data: () => ({
    show: false,
  }),
}
</script>

<style>

</style>
