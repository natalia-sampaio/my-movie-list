<script setup>
defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<template>
    <h1 class="font-kanit font-medium text-beige text-5xl">{{ title }}</h1>
</template>