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
    <div class="2xl:w-1/3 w-1/2 xs:w-11/12 mx-auto flex items-center">
      <input v-model="searchedTitle" @keyup.enter="getSearchResults" type="search" class="bg-slate-700 rounded-full 2xl:rounded-2xl pl-8 py-4 w-full my-4 opacity-70 font-kanit text-beige  focus:outline-none hover:border-blue-accent hover:ring-2 hover:ring-blue-accent focus:border-beige focus:ring-2 focus:ring-beige" placeholder="Search a movie title..." aria-label="search bar">
      <SearchIcon class="w-5 h-5 ml-[-4rem] hidden 2xl:block" />
      <button @click.prevent="getSearchResults" class="m-[-3.25rem] p-4 bg-slate-700 rounded-full border-2 border-beige z-50 2xl:hidden"><SearchIcon /></button>
    </div>
    <RouterLink to="/favorites">
      <CheckboxFavorites :checked="checked" />
    </RouterLink>
  </header>
  <main class="flex flex-wrap justify-center items-center">
      <MovieCard v-for="movie in movies" :movie="movie" :key="movie.id" />
  </main>
</template>
