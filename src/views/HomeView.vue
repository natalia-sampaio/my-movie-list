<script setup>
import PageTitle from '@/components/PageTitle.vue'
import MovieCard from '@/components/MovieCard.vue'
import apiKey from '../../apiKey.js'
import { useLocalStorage } from '@vueuse/core'
import SearchBar from '@/components/SearchBar.vue';
import CheckboxFavorites from '@/components/CheckboxFavorites.vue';
</script>

<script>
  export default {
    data() {
        return {
            movies: [],
            favoriteMovies: useLocalStorage("movies", []),
            checked: false
        };
    },
    methods: {
        async getPopularMovies() {
            const request = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=1`;
            const fetchResponse = await fetch(request);
            const response = await fetchResponse.json();
            return this.movies = response.results;
        }
    },
    beforeMount() {
        this.getPopularMovies();
    }
}
</script>

<template>
  <header class="m-16 text-center w-screen">
    <PageTitle title="Popular Movies" />
    <SearchBar />
    <RouterLink to="/favorites">
      <CheckboxFavorites :checked="checked" />
    </RouterLink>
  </header>
  <main class="flex flex-wrap justify-center items-center">
      <MovieCard v-for="movie in movies" :movie="movie" :key="movie.id" />
  </main>
</template>
