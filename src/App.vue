<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import PageTitle from './components/PageTitle.vue';

</script>

<template>
  <header class="m-16 text-center">
    <PageTitle title="Popular Movies" />
    <input type="search" class="rounded-full pl-4 py-2 opacity-50 font-kanit" placeholder="Search a movie title..." aria-label="search bar">
    <div class="cabecalho__filtro">
      <input type="checkbox" class="cabecalho__checkbox" id="filtro" aria-label="filtro de filmes favoritos">
      <label for="filtro" class="cabecalho__filtro-descricao">Mostrar meus filmes favoritos apenas</label>
    </div>
  </header>
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