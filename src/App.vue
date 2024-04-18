<template>
  <div>
    <NavBarComponent />
  </div>
</template>

<script>
import axios from 'axios';
import { store } from './store';
import NavBarComponent from './components/NavBarComponent.vue';



  export default {
    name: 'App',
    components: {
      NavBarComponent,
    },
    data() {
      return {
        store
      }
    },
    methods: {
      getMovies() {
        axios.get(this.store.apiUrl+this.store.endPoint.movies, this.store.options).then((res)=> {
          console.log(res.data.results);
          this.store.movies = res.data.results;
        })
      },
      getTvSeries() {
        axios.get(this.store.apiUrl+this.store.endPoint.series, this.store.options).then((res)=> {
          console.log(res.data.results);
          this.store.tv = res.data.results;
        })
      }
    },
    created() {
      this.getMovies();
      this.getTvSeries();
    }
  }
</script>

<style lang="scss" scoped>

</style>

<!-- cff4a1166def8a6357ad9e59123efd6c -->  
<!-- eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmY0YTExNjZkZWY4YTYzNTdhZDllNTkxMjNlZmQ2YyIsInN1YiI6IjY2MWY3YTM4MDgxNmM3MDE3Y2VmYTQ5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a15xxMzShjdgx8q_L-QiZ29CnQm0O37tGhaN6kxx_vs -->