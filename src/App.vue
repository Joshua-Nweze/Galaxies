<template>
  <Nav
   :cart="cart"
  />
  <router-view
  :key="$route.path"
   @addToCart="addToCart"
   :cart="cart"
   @removeFromCart="removeFromCart"
  />
  <Footer />
</template>

<script setup>
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { reactive, ref } from '@vue/reactivity';
import { computed, onUpdated } from '@vue/runtime-core';

let product = ref()
let cart = reactive([])
let productCat = ref('')
let searchQuery = ref('')

function toProduct(data) {
  product.value = data
}

function addToCart(data) {
  cart.push(data)
}

function removeFromCart(index) {
  cart.splice(index, 1)
}

function getProductCat(data) {
  productCat.value = data
}

function search(query){
  searchQuery.value = query
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  overflow: hidden;
}

.router{
  text-decoration: none;
}

 .container-fluid, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    width: 100%;
    padding-right: 0;
    padding-left: 0;
    margin-right: 0;
    margin-left: 0;
 }

</style>
