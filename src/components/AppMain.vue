<script>
import { store } from '../store.js';
import AppCardFilm from './AppCardFilm.vue';


export default {
    name: 'AppMain',
    components: {
        AppCardFilm,

    },
    data() {
        return {
            store
        }
    },
}
</script>

<template lang="">
    <div class="container my-3">
        
        <h1>FILM</h1>
        <div class="row ">
            <AppCardFilm v-for="(film, index) in store.filmsShowed" :key="index" class="col-6 col-md-3 col-xl-2" :media="film">                   
            </AppCardFilm>
        </div>

        <h1>Serie TV</h1>
        <div class="row ">
            <AppCardFilm v-for="(serie, index) in store.seriesShowed" :key="index" class="col-6 col-md-3 col-xl-2" :media="serie">                   
            </AppCardFilm>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss' as*;
@use '../styles/partials/variables' as*;
</style>