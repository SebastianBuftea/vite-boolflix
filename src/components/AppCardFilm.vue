<script>
import { store } from '../store.js';
export default {
    name: 'AppCardFilm',
    props: {
        media: Object,
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
            <h4> <strong>Title:</strong> {{media.title}}</h4>
            <h5><strong>Original Title:</strong> {{media.originalTitle}}</h5>
            <h5><strong>Language:</strong> {{media.language}}</h5>
            <h5><strong>Vote:</strong> {{media.vote}}</h5>
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
    height: 300px;
}
</style>