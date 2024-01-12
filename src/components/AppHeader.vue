<script>
export default {
    name: 'AppHeader',

}
</script>

<template lang="">
    <header>
        <div class="container p-3">
            <div class="row d-flex justify-content-between align-items-center">
                <div class="title w_auto">BOOLFLIX</div>
                <div class="w_auto">
                    <input class=" me-2 p-1" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-danger" type="submit">Search</button>      
                </div>
            </div>
         </div>
    </header>
    
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss' as*;
@use '../styles/partials/variables' as*;

header {
    background-color: black;

    .title {
        color: $color_red;
        font-weight: bolder;
        font-size: xx-large;
    }
}
</style>