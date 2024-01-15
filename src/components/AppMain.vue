<script>
import { store } from '../store.js';

export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    },
}
</script>

<template lang="">
    <div class="container">
        <div class="row">
            <div v-for="(film, index) in store.filmsShowed" :key="index" class=" col-6 col-md-3 col-xl-2">
                <div class="card_">
                    <h4> <strong>Title:</strong> {{film.title}}</h4>
                    <h5><strong>Original Title:</strong> {{film.originalTitle}}</h5>
                    <h5><strong>Language:</strong>{{film.language}}</h5>
                    <h5><strong>Vote:</strong>{{film.vote}}</h5>
                </div>
               
            </div>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss' as*;
@use '../styles/partials/variables' as*;

.card_ {
    margin: 10px;
    border: 1px solid black;
    width: 100%;
    height: 300px;
    background-color: white;
}
</style>