<template>
    <div>
        <ViewProduct
         :product="product"
         @addToCart="addToCart"
         @save="save"
        />
    </div>
</template>

<script setup>
import ViewProduct from "@/components/Products/ViewProduct.vue";

const props = defineProps(['product'])
const emit = defineEmits(['addToCart', 'save'])

function addToCart(data) {
    emit('addToCart', data)
}

function save(data) {
    emit('save', data)
}
</script>

<style scoped>

</style>