<template>
    <div>
        <Cart
         :cart="cart"
         @removeFromCart="removeFromCart"
        />
    </div>
</template>

<script setup>
import Cart from '@/components/Cart/Cart'

const props = defineProps(['cart'])
const emit = defineEmits(['removeFromCart'])

function removeFromCart(index) {
    emit('removeFromCart', index)
}

</script>

<style scoped>

</style>