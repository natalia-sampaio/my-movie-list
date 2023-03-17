<script setup>
import PageTitle from '@/components/PageTitle.vue'
import MovieCard from '@/components/MovieCard.vue'
</script>

<script>
export default {
    data() {
        return {
          checked: true
        }
    },
}
</script>

<template>
  <header class="m-16 text-center w-screen">
    <PageTitle title="My favorite movies" />
    <div class="relative w-6/12 mx-auto">
      <img src="@/assets/images/search-icon.svg" alt="search icon" class="w-5 h-5 absolute top-8 right-44">
      <input type="search" class="bg-slate-700 rounded-2xl pl-8 py-4 w-9/12 my-4 mx-auto opacity-70 font-kanit text-beige  focus:outline-none hover:border-blue-accent hover:ring-2 hover:ring-blue-accent focus:border-beige focus:ring-2 focus:ring-beige" placeholder="Search a movie title..." aria-label="search bar">
    </div>
    <RouterLink to="/">
      <label for="filter" class="text-beige font-medium pl-2 peer-checked:text-blue-accent peer-checked:font-semibold hover:cursor-pointer">
        <input v-model="checked" type="checkbox" class="h-4 w-4 hover:cursor-pointer peer accent-blue-accent checked: " id="filter" aria-label="show only my favorite movies"> Show only my favorite movies
      </label>
    </RouterLink>
  </header>
  <main class="flex flex-wrap justify-center items-center">
      <MovieCard v-for="movie in movies" :movie="movie" />
  </main>
</template>
