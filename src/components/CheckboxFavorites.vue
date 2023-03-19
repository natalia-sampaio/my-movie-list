<script setup>
defineProps({
    checked: Boolean
})
</script>


<template>
    <label for="filter" class="text-beige font-medium pl-2 peer-checked:text-blue-accent peer-checked:font-semibold hover:cursor-pointer">
        <input :checked="checked" type="checkbox" class="h-4 w-4 hover:cursor-pointer peer accent-blue-accent" id="filter" aria-label="show only my favorite movies"> Show only my favorite movies
    </label>
</template>