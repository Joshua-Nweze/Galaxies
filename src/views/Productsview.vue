<template>
    <div class="container-fluid row">
        <div class="col-lg-3 d-none d-lg-block">
            <Sidenav />
        </div>
        <div class="col-lg-9 col-md-12 col-sm-12">
            <Products
             :productCat="productCat"
             @toProduct="toProduct"
            />
        </div>
    </div>
</template>

<script setup>
import Sidenav from '@/components/Main/Sidenav.vue'
import Products from '@/components/Products/Products.vue'

let props = defineProps(['productCat'])
let emit = defineEmits(["toProduct"])

function toProduct(data){
    emit("toProduct", data)
}
</script>

<style scoped>

</style>