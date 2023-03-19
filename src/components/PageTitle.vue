<script setup>
defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<template>
    <h1 class="font-kanit font-medium text-beige sm:text-5xl xs:text-4xl m-4">{{ title }}</h1>
</template>