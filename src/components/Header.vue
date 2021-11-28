<template>
  <div>
    <v-toolbar class="background">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Des. Web</v-toolbar-title>

      <v-spacer></v-spacer>

      <div
          v-for="item in items"
          :key="item.title"
          link>
        <v-btn text>
          <v-icon @click="goTo(item.type)">{{ item.icon }}</v-icon>
        </v-btn>
      </div>

    </v-toolbar>
    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9jdXN8ZW58MHx8MHx8&w=1000&q=80"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Joséfino</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
            v-for="item in items"
            :key="item.title"
            link
        >
          <v-list-item-icon @click="goTo(item.type)">
            <v-icon class="pr-2">{{ item.icon }} </v-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-icon>

        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: null,
      items: [
        { title: 'Home', icon: 'mdi-home', type: 'home' },
        { title: 'Sobre', icon: 'mdi-forum', type: 'about'},
        { title: 'Produtos', icon: 'mdi-archive', type: 'products'},
        { title: 'Usuarios', icon: 'mdi-account', type: 'users'},
      ],
    }
  },
  methods:{
    goTo(name){
      this.$router.push(name)
    }
  }
}
</script>

<style>

.background {
  background: white !important;
  box-shadow: 0 5px 16px #00000070;
}

</style>
