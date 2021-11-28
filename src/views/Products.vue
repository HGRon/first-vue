<template>
  <div class="products">
    <div class="products-content">
      <div v-for="product in GetProducts" :key="product.id" class="card">
        <Card :name="product.name"
              :img="product.img"
              :price="product.price"
        ></Card>
      </div>
    </div>
  </div>
</template>

<script>

import Card from '@/components/Card'

export default {

  name: 'Products',
  components: {
    Card,
  },
  computed: {
    GetProducts() {
      return this.$store.state.products;
    }
  }
}
</script>

<style>

.products {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  padding: 1rem;

  background: rgb(2,0,36);
  background: linear-gradient(317deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
}

.products-content {
  display: grid;
  gap: 2em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  width: 100%;
  height: 100%;
  padding: 2rem;

  background-color: #FFFFFF90;
  box-shadow: 0 4px 6px #00000030;
}

</style>
