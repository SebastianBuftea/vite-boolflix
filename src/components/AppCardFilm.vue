<script>
import { store } from '../store.js';
import CountryFlag from 'vue-country-flag-next'
export default {
    name: 'AppCardFilm',
    props: {
        media: Object,
    },
    components: {
        CountryFlag
    },

    data() {
        return {
            store

        }

    },

}
</script>

<template lang="">
    <div>
        <div class="card_ p-1 m-1">
            <img :src="media.image==null ? `https://demofree.sirv.com/nope-not-here.jpg`:` https://image.tmdb.org/t/p/w185${media.image}`" alt="">
            <h4> <strong>Title:</strong> {{media.title}}</h4>
            <h5><strong>Original Title:</strong> {{media.originalTitle}}</h5>
            <h5><strong>Language:</strong> {{media.language}}</h5>
            <country-flag :country="media.language=='en' ? 'gb':media.language" size='normal'/>
            <h5><strong>Vote:</strong>
                <span v-for="(star, index) in media.vote" v-html="star">
                </span>
                </h5>
             <!-- {{media.vote}} -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss' as*;
@use '../styles/partials/variables' as*;

.card_ {
    background-color: black;
    border: 1px solid black;
    width: 100%;
    height: 400px;

    img {
        width: 100%;
        height: 150px;
        object-fit: fill;
    }
}
</style>