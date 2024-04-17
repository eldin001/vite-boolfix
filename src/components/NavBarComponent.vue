<template>
    <nav class="navbar">
        <div class="img">
            <img src="/img/netflixVector__3_.svg" alt="Logo Netflix">
        </div>
        <div>
            <input type="text" v-model="searchTerm" placeholder="Cerca film...">
            <button @click="searchMovies">Search</button>
        </div>
    </nav>
    <main>
        <ul class="d-flex list-unstyled justify-content-center flex-wrap" v-if="moviesList.length > 0">
            <li v-for="movie in moviesList" :key="movie.id">
                <card-component :movie="movie" />
            </li>
        </ul>
        <p v-else>Nessun film trovato.</p>
    </main>
</template>

<script>
import axios from 'axios';
import { store } from '../store';
import CardComponent from './CardComponent.vue'; // Import the CardComponent

export default {
    name: 'NavBarComponent',
    components: {
        CardComponent,
    },
    data() {
        return {
            searchTerm: '',
            moviesList: [],
        };
    },
    methods: {
        searchMovies() {
            const searchUrl = `${store.apiUrl}${store.endPoint.movie}?api_key=${store.options.params.api_key}&query=${this.searchTerm}`;
            axios.get(searchUrl)
                .then(response => {
                    this.moviesList = response.data.results;
                })
                .catch(error => {
                    console.error('Errore durante la ricerca:', error);
                });
        },
    },
};
</script>

<style lang="scss" scoped>
nav {
    background: rgb(0, 0, 0);
    background: linear-gradient(180deg, rgba(0, 0, 0, 1) 44%, rgba(69, 69, 69, 1) 100%);
    padding: 20px;

    img {
        width: 200px;
    }

    input {
        padding: 5px 10px;
        border-radius: 10px 0 0 10px;
        border: 2px solid white;
    }

    button {
        border-top: 2px solid white;
        border-right: 2px solid white;
        border-bottom: 2px solid white;
        border-left: none;
        border-radius: 0 10px 10px 0;
        color: white;
        padding: 5px 10px;
        background-color: black;
    }
}

main {
    display: flex;
}
</style>
