<script setup>
defineProps({
    label: {
        type: String,
        required: true
    }
})
</script>

<template>
    <h1 class="pl-1">{{ label }}</h1>
</template>