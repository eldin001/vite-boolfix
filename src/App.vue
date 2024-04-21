<template>
  <NavBarComponent @searchApi="getMedia" />
  <MainComponent />
</template>

<script>
import axios from 'axios';
import { store } from './store';
import NavBarComponent from './components/NavBarComponent.vue';
import MainComponent from './components/MainComponent.vue'

export default {
  name: 'App',
  components: {
    NavBarComponent,
    MainComponent,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getMedia() {
      if(this.store.options.params.query) {
      this.store.loading = true;
      this.store.error.message = '';
      Promise.all([this.getMovies(), this.getTvSeries()]).then((res) => {
        this.store.movies = res[0].data.results;
        this.store.tv = res[1].data.results;
      }).catch((error) => {
        console.log(error);
        this.store.error.message = error.message;
      }).finally(() => {
        console.log('finally');
        this.store.loading = false;
      })
    }
    },
    getMovies() {
      return axios.get(this.store.apiUrl + this.store.endPoint.movie, this.store.options);
    },
    getTvSeries() {
      return axios.get(this.store.apiUrl + this.store.endPoint.series, this.store.options);
    },
  },
  created() {
    

  }
}
</script>

<style lang="scss" scoped></style>

<!-- cff4a1166def8a6357ad9e59123efd6c -->
<!-- eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmY0YTExNjZkZWY4YTYzNTdhZDllNTkxMjNlZmQ2YyIsInN1YiI6IjY2MWY3YTM4MDgxNmM3MDE3Y2VmYTQ5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a15xxMzShjdgx8q_L-QiZ29CnQm0O37tGhaN6kxx_vs -->