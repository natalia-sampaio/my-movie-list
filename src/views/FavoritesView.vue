<script setup>
import PageTitle from '@/components/PageTitle.vue'
import MovieCard from '@/components/MovieCard.vue'
import SearchBar from '@/components/SearchBar.vue';
import CheckboxFavorites from '@/components/CheckboxFavorites.vue';
</script>

<script>
export default {
    data() {
        return {
            checked: true
        };
    }
}
</script>

<template>
  <header class="m-16 text-center w-screen">
    <PageTitle title="My favorite movies" />
    <SearchBar />
    <RouterLink to="/">
      <CheckboxFavorites :checked="checked" />
    </RouterLink>
  </header>
  <main class="flex flex-wrap justify-center items-center">
      <MovieCard v-for="movie in movies" :movie="movie" />
  </main>
</template>
