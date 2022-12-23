<template>
    <div class="mt-5">
        <span class="trend fw-bold"><i class="bi bi-fire"></i>Trending </span>
        <div>
            <Trends />
        </div>
    </div>
</template>

<script setup>
import Trends from './Trends.vue'
</script>

<style scoped>
.trend{
    font-size: 24px;
}
</style>