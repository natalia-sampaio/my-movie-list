<script>
export default {
    props: {
        movie: Object
    }
}
</script>

<template>
    <div class="font-kanit text-beige w-2/3 m-8 shadow-accent bg-blue-900 rounded-xl flex items-center">
        <div class="m-8">
            <img :src="movie.image" alt="Poster do filme Metrópolis" class="rounded-full w-32 h-32 object-cover shadow-2xl">
        </div>
        <div class="grid items-center my-4 w-52">
            <span class="font-bold text-lg mb-3">{{ movie.title }} ({{ movie.year }})</span>
            <div class="flex items-center">
                <img src="@/assets/images/star.svg" alt="Movie rating icon">
                <span class="pl-1">{{ movie.rating }}</span>
                <input type="checkbox" id="like" class="peer hidden">
                <label for="like" class="flex pl-4 peer-checked:hidden">
                    <img src="@/assets/images/heart.svg" alt="" class="">
                    <span class="pl-1">Favoritar</span>
                </label>
                <label for="like" class="hidden pl-4 peer-checked:flex">
                        <img src="@/assets/images/heart-filled.svg" alt="" class="">
                        <span class="pl-1">Favorito</span>
                </label>
            </div>
        </div>
        <span class="m-4 text-center">{{ movie.description }}</span>
    </div>
</template>