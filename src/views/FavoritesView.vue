<script setup>
import PageTitle from '@/components/PageTitle.vue'
import MovieCard from '@/components/MovieCard.vue'
import SearchIcon from '@/components/icons/IconSearch.vue'
import CheckboxFavorites from '@/components/CheckboxFavorites.vue';
import { useLocalStorage } from '@vueuse/core';
</script>

<script>
export default {
    data() {
        return {
            checked: true,
            movies: useLocalStorage("movies", [])
        };
    }
}
</script>

<template>
  <header class="m-16 text-center w-screen">
    <PageTitle title="My favorite movies" />
    <div class="relative w-6/12 mx-auto">
        <SearchIcon class="w-5 h-5 absolute top-8 right-40"/>
        <input v-model="searchedTitle" @keyup.enter="getSearchResults" type="search" class="bg-slate-700 rounded-2xl pl-8 py-4 w-9/12 my-4 mx-auto opacity-70 font-kanit text-beige  focus:outline-none hover:border-blue-accent hover:ring-2 hover:ring-blue-accent focus:border-beige focus:ring-2 focus:ring-beige" placeholder="Search a movie title..." aria-label="search bar">
    </div>
    <RouterLink to="/">
      <CheckboxFavorites :checked="checked" />
    </RouterLink>
  </header>
  <main class="flex flex-wrap justify-center items-center">
      <MovieCard v-for="movie in movies" :movie="movie" />
  </main>
</template>
