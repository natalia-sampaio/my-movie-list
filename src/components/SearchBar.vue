<script setup>
    defineProps({
        searchedTitle: ""
    })
</script>

<template>
    <input :value="searchedTitle" type="search" class="bg-slate-700 rounded-2xl pl-8 py-4 w-9/12 my-4 mx-auto opacity-70 font-kanit text-beige  focus:outline-none hover:border-blue-accent hover:ring-2 hover:ring-blue-accent focus:border-beige focus:ring-2 focus:ring-beige" placeholder="Search a movie title..." aria-label="search bar">
</template>