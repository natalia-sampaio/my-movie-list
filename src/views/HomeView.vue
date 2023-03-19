<script setup>
import PageTitle from '@/components/PageTitle.vue'
import MovieCard from '@/components/MovieCard.vue'
import apiKey from '../../apiKey.js'
import { useLocalStorage } from '@vueuse/core'
import CheckboxFavorites from '@/components/CheckboxFavorites.vue'
import SearchIcon from '@/components/icons/IconSearch.vue'
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
        },
        async getSearchResults() {
          const request = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${this.searchedTitle}&page=1`;
          const fetchResponse = await fetch(request);
          const response = await fetchResponse.json();
          this.movies = response.results;
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
    <div class="relative w-6/12 mx-auto">
      <SearchIcon class="w-5 h-5 absolute top-8 right-40"/>
      <input v-model="searchedTitle" @keyup.enter="getSearchResults" type="search" class="bg-slate-700 rounded-2xl pl-8 py-4 w-9/12 my-4 mx-auto opacity-70 font-kanit text-beige  focus:outline-none hover:border-blue-accent hover:ring-2 hover:ring-blue-accent focus:border-beige focus:ring-2 focus:ring-beige" placeholder="Search a movie title..." aria-label="search bar">
    </div>
    <RouterLink to="/favorites">
      <CheckboxFavorites :checked="checked" />
    </RouterLink>
  </header>
  <main class="flex flex-wrap justify-center items-center">
      <MovieCard v-for="movie in movies" :movie="movie" :key="movie.id" />
  </main>
</template>
