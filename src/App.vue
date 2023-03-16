<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MovieCard from './components/MovieCard.vue'
</script>

<script>
  export default {
    data() {
      return {
        movies: [
          {
            image: 'https://img.elo7.com.br/product/original/3FBA809/big-poster-filme-batman-2022-90x60-cm-lo002-poster-batman.jpg',
            title: 'Batman',
            rating: 9.2,
            year: 2022,
            description: "Descrição do filme…",
            isFavorited: true,
          },
          {
            image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg',
            title: 'Avengers',
            rating: 9.2,
            year: 2019,
            description: "Descrição do filme…",
            isFavorited: false
          },
          {
            image: 'https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg',
            title: 'Doctor Strange',
            rating: 9.2,
            year: 2022,
            description: "Descrição do filme…",
            isFavorited: false
          },
        ]
      }
    }
  }
</script>

<template>
  <header class="m-16 text-center">
    <RouterLink to="/" />
    <RouterView />
    <div class="relative w-6/12 mx-auto">
      <img src="@/assets/images/search-icon.svg" alt="search icon" class="w-5 h-5 absolute top-8 right-44">
      <input type="search" class="bg-slate-700 rounded-2xl pl-8 py-4 w-9/12 my-4 mx-auto opacity-70 font-kanit text-beige  focus:outline-none hover:border-blue-accent hover:ring-2 hover:ring-blue-accent focus:border-beige focus:ring-2 focus:ring-beige" placeholder="Search a movie title..." aria-label="search bar">
    </div>
    <div class="text-center">
      <input type="checkbox" class="h-4 w-4 hover:cursor-pointer peer accent-blue-accent" id="filter" aria-label="show only my favorite movies">
      <label for="filter" class="text-beige font-medium pl-2 peer-checked:text-blue-accent peer-checked:font-semibold hover:cursor-pointer">Show only my favorite movies</label>
    </div>
  </header>
  <main class="flex flex-wrap justify-center items-center">
    <MovieCard v-for="movie in movies" :movie="movie" />
  </main>
  
  <!-- <header>
    <img alt="Vue logo" class="" src="@/assets/logo.svg" width="125" height="125" />

    <div class="">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
</template>