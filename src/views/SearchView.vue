<template>
    <div class="container-fluid row">
        <div class="col-lg-3 d-none d-lg-block">
            <Sidenav />
        </div>
        <div class="col-lg-9 col-md-12 col-sm-12">
            <Search />
        </div>
    </div>
</template>

<script setup>
import Search from '@/components/Search/Search.vue'
import Sidenav from '@/components/Main/Sidenav.vue'
</script>

<style scoped>

</style>