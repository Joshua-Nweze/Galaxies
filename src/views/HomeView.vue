<template>
  <div class="container-fluid row">
    <div class="col-lg-3 d-none d-lg-block sidenavbg">
      <Sidenav />
    </div>
    <div class="col-lg-9 col-md-12 col-sm-12">
      <Sliders />
      <TrendingProducts @toProduct="toProduct"/>
      <RecentlyUploaded />
    </div>
  </div>
  <!-- <Footer /> -->
</template>

<style>
/* .sidenavbg{
  /* position: fixed;
} */
</style>

<script setup>
import Sidenav from '@/components/Main/Sidenav';
import Sliders from '@/components/Main/Sliders';
import TrendingProducts from '@/components/Main/TrendingProducts'
import RecentlyUploaded from '@/components/Main/RecentlyUploaded'
// import Footer from '@/components/Footer'

let emit = defineEmits(['toProduct'])

function toProduct(data) {
  emit("toProduct", data);
}
</script>
