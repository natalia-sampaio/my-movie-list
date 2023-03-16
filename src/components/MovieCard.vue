<script>
</script>

<template>
    <div class="font-kanit text-beige w-2/3 m-8 shadow-accent bg-blue-900 rounded-xl flex items-center">
        <div class="m-8">
            <img src="https://m.media-amazon.com/images/M/MV5BMTg5YWIyMWUtZDY5My00Zjc1LTljOTctYmI0MWRmY2M2NmRkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" alt="Poster do filme Metrópolis" class="rounded-full w-32 h-32 object-cover shadow-2xl">
        </div>
        <div class="grid items-center my-4 w-52">
            <span class="font-bold text-lg mb-3">Metropolis (1927)</span>
            <div class="flex items-center">
                <img src="@/assets/images/star.svg" alt="Movie rating icon">
                <span class="pl-1">8.3</span>
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
        <span class="m-4 text-center">Numa cidade futurística dividida entre os trabalhadores e os planejadores, o filho do maior planejador se apaixona por
            uma trabalhadora.</span>
    </div>
</template>