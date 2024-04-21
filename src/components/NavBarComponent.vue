<template>
    <nav class="navbar">
        <div class="img">
            <img src="/img/netflixVector__3_.svg" alt="Logo Netflix">
        </div>
        <div>
            <input type="text" v-model.trim="store.options.params.query" placeholder="Cerca film e serie..." @keyup.enter="searchMedia">
            <button @click="searchMedia">Search</button>
        </div>
    </nav>
   
</template>

<script>
import { store } from '../store';
  export default {
    name: 'NavBarComponent',
    data () {
        return {
            store,
        }
    },
    methods: {
        searchMedia() {
            this.$emit('searchApi');
            
        }
    }
}
</script>

<style lang="scss" scoped>
nav {
    position: fixed;
    z-index: 1001;
    width: 100%;
    top: 0;
    left: 0;
    background-color: white;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    img {
        width: 200px;
    }

    input {
        padding: 5px 10px;
        border-radius: 10px 0 0 10px;
        border: 2px solid lightgray;
    }

    button {
        border-top: 2px solid lightgray;
        border-right: 2px solid lightgray;
        border-bottom: 2px solid lightgray;
        border-left: none;
        border-radius: 0 10px 10px 0;
        color: white;
        padding: 5px 10px;
        background-color: lightgray;
    }
}
</style>
