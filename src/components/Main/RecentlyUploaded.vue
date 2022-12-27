<template>
    <div class="mt-5">
        <span class="trend fw-bold">Recently uploaded </span>
        <Recents />
    </div>
</template>

<script setup>
import Recents from './Recents.vue'
</script>

<style scoped>
    .trend{
        font-size: 24px;
    }
</style>