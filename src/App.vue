<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MovieCard from './components/MovieCard.vue';
</script>

<template>
  <header class="m-16 text-center">
    <RouterLink to="/" />
    <RouterView />
    <div class="relative w-full">
      <img src="@/assets/images/search-icon.svg" alt="search icon" class="w-5 h-5 absolute top-8 right-44">
      <input type="search" class="bg-slate-700 rounded-2xl pl-8 py-4 w-9/12 my-4 mx-auto opacity-70 font-kanit text-beige  focus:outline-none hover:border-blue-accent hover:ring-2 hover:ring-blue-accent focus:border-beige focus:ring-2 focus:ring-beige" placeholder="Search a movie title..." aria-label="search bar">
    </div>
    <div class="text-center">
      <input type="checkbox" class="h-4 w-4 hover:cursor-pointer peer accent-blue-accent" id="filter" aria-label="show only my favorite movies">
      <label for="filter" class="text-beige font-medium pl-2 peer-checked:text-blue-accent peer-checked:font-semibold hover:cursor-pointer">Show only my favorite movies</label>
    </div>
  </header>
  <main>
    <MovieCard />
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