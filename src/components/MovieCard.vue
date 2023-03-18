<script setup>
import HeartIcon from './icons/IconHeart.vue'
import StarIcon from './icons/IconStar.vue'
import HeartLabel from './HeartLabel.vue';
</script>

<script>
import { useLocalStorage } from '@vueuse/core'
export default {
    props: {
        movie: Object
    },
    data() {
        return {
            favoriteMovies: useLocalStorage("movies", []),
            checked: false
        };
    },
    methods: {
        async saveMovieAsFavorite() {
            if (!this.checked) {
                this.removeMovieFromFavorites();
                return;
            }
            console.log(this.movie)
            this.favoriteMovies.push(this.movie);
        },
        async removeMovieFromFavorites() {
            this.favoriteMovies.splice(this.favoriteMovies.findIndex(element => element.id === this.movie.id), 1);
        },
        getFavoritedMovies() {
            if (this.favoriteMovies.find(element => element.id === this.movie.id)) {
                this.checked = true;
            }
        }
    },
    beforeMount() {
        this.getFavoritedMovies();
    },
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
                <StarIcon />
                <span class="pl-1">{{ movie.vote_average }}</span>
                <label class="flex pl-4">
                    <input type="checkbox" class="hidden" v-model="checked" @change="saveMovieAsFavorite" aria-label="like button">
                    <HeartIcon :svgColor="checked ? '#BA0707' : 'none'" class="hover:fill-red-700"/>
                    <HeartLabel :label="checked ? 'Favorited' : 'Favorite'" />
                </label>
            </div>
        </div>
        <span class="mx-4 my-8 self-start w-1/2">{{ movie.overview }}</span>
    </div>
</template>