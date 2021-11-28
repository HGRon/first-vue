<template>
  <div class="home">
    <div class="home-content">
      <img alt="logo" src="https://images.vexels.com/media/users/3/224241/isolated/preview/4d2aacf413b02b74c2cdb75ea41f24d3-logotipo-diple-de-programacao.png"/>
      <h3>Bem vindo ao gerenciador de usuarios e produtos</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {}
}
</script>

<style>

.home {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  padding: 1rem;

  background: rgb(2,0,36);
  background: linear-gradient(317deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
}

.home-content h3 {
  padding: 2rem 1rem;

  background-color: white;
  color: rgba(2, 0, 36, 1);
  border-radius: 1rem;
  width: fit-content;
  font-weight: bold;
  font-size: 3rem;
  box-shadow: 0 5px 8px #00000050;
}

.home-content img {
  height: 15rem;
  margin-bottom: 8rem;
}

.home-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  padding: 2rem;

  background-color: #FFFFFF90;
  box-shadow: 0 4px 6px #00000030;
}

</style>
