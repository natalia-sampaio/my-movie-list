<script>
import { useLocalStorage } from '@vueuse/core'
export default {
    props: {
        movie: Object
    },
    data() {
        return {
            favoriteMovies: useLocalStorage('movies', []),
            checked: false
        }
    },
    methods: {
        async saveMovieAsFavorite() {
            if(!this.checked) {
                this.removeMovieFromFavorites()
                return
            }
            this.favoriteMovies.push(this.movie)
        },
        async removeMovieFromFavorites() {
            this.favoriteMovies.splice(this.favoriteMovies.findIndex(element => element.id === this.movie.id), 1)
        }

    }
}
</script>

<template>
    <div class="font-kanit text-beige w-1/2 m-8 shadow-accent bg-blue-900 rounded-xl flex items-center">
        <div class="m-8">
            <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="movie poster" class="rounded-full w-32 h-32 object-cover shadow-2xl">
        </div>
        <div class="grid items-center my-4 w-1/4">
            <span class="font-bold text-lg mb-3">{{ movie.title }} ({{ movie.release_date }})</span>
            <div class="flex items-center">
                <img src="@/assets/images/star.svg" alt="Movie rating icon">
                <span class="pl-1">{{ movie.vote_average }}</span>
                <label for="like" class="flex pl-4">
                    <input type="checkbox" id="like" class="" v-model="checked" @change="saveMovieAsFavorite">
                    <img src="@/assets/images/heart.svg" alt="" class="">
                    <span class="pl-1">Favoritar</span>
                </label>
            </div>
        </div>
        <span class="mx-4 my-8 self-start w-1/2">{{ movie.overview }}</span>
    </div>
</template>