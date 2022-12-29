<template>
    <div class="container-fluid row">
        <div class="col-lg-3 d-none d-lg-block">
            <Sidenav />
        </div>
        <div class="col-lg-9 col-md-12 col-sm-12">
            <Products />
        </div>
    </div>
</template>

<script setup>
import Sidenav from '@/components/Main/Sidenav.vue'
import Products from '@/components/Products/Products.vue'
</script>

<style scoped>

</style>