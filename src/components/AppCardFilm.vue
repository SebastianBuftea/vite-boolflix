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
            <div class="flip-card  m-1">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img :src="media.image==null ? `https://demofree.sirv.com/nope-not-here.jpg`:` https://image.tmdb.org/t/p/w185${media.image}`" >
                    </div>
                    <div class="flip-card-back ">
                        <div class="overflow-y-auto p-2 h_content">
                            <h4> <strong>Title:</strong> {{media.title}}</h4>
                            <h5><strong>Original Title:</strong> {{media.originalTitle}}</h5>
                            <h5><strong>Language:</strong> {{media.language}}</h5>
                            <country-flag :country="media.language=='en' ? 'gb':media.language" size='normal'/>
                            <h5><strong>Vote:</strong>
                                <span v-for="(star, index) in media.vote" v-html="star">
                                </span>
                            </h5>
                            <p>Overview:{{media.overview}}</p>
                        </div>
                        
                    </div>
                </div>
            </div>    
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss' as*;
@use '../styles/partials/variables' as*;

.flip-card {
    background-color: transparent;
    width: 200px;
    height: 300px;
    perspective: 1000px;

    &:hover .flip-card-inner {
        transform: rotateY(180deg);
    }

    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

        .flip-card-front,
        .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
        }

        .flip-card-front {
            background-color: #bbb;
            color: black;

            img {
                width: 200px;
                height: 300px;
            }
        }

        .flip-card-back {
            background-color: black;
            color: white;
            transform: rotateY(180deg);

            .h_content {
                width: 100%;
                height: 95%;
            }
        }
    }




}
</style>