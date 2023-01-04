<template>
    <div>
        <ViewProduct
         :product="product"
         @addToCart="addToCart"
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
</script>

<style scoped>

</style>