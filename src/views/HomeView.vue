<template>
  <div class="container-fluid row">
    <div class="col-3">
      <Sidenav />
    </div>
    <div class="col-9">
      <Sliders />
      <TrendingProducts />
      <RecentlyUploaded />
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Sidenav from '@/components/Main/Sidenav';
import Sliders from '@/components/Main/Sliders';
import TrendingProducts from '@/components/Main/TrendingProducts'
import RecentlyUploaded from '@/components/Main/RecentlyUploaded'
import Footer from '@/components/Footer'

</script>
