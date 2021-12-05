<template>
  <div class="users">
    <div class="users-content">
      <div class="container" v-for="user in users" :key="user.id.name">
        <UserCard :name="user.name.first + ' ' + user.name.last "
                  :image="user.picture.large"
                  :likes="user.registered.age"
                  :key="user.id.name"
                  :email="user.email"
                  :phone="user.phone"
        ></UserCard>
      </div>
    </div>
  </div>
</template>

<script>
import UserCard from '@/components/UserCard'
export default {
  name: 'Users',
  components: { UserCard },
  computed: {
    users() {
      return this.$store.state.users;
    }
  },
  async created() {
    await this.$store.dispatch("fetchUsers");
  },
}
</script>

<style>

.users {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  padding: 1rem;

  background: rgb(2,0,36);
  background: linear-gradient(317deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
}

.users-content {
  display: grid;
  align-items: start;
  gap: 2em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  width: 100%;
  height: 100%;
  padding: 2rem;

  background-color: #FFFFFF90;
  box-shadow: 0 4px 6px #00000030;
}

.container {
  height: fit-content;
}

</style>
