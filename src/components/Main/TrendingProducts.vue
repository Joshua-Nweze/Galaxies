<template>
    <div class="mt-5" id="trends">
        <span class="trend fw-bold"><i class="bi bi-fire"></i>Trending </span>
        <Trends @toProduct="toProduct"/>
    </div>
</template>

<script setup>
import Trends from './Trends.vue'

const emit = defineEmits(['toProduct'])

function toProduct(data) {
    emit('toProduct', data)
}
</script>

<style scoped>
    .trend{
        font-size: 24px;
    }
</style>