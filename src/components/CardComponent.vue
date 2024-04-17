
<template>
    <div class="movie-card">
      <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="Movie Poster" />
      <div class="card-content">
        <h3>{{ movie.title }}</h3>
        <p>Titolo Originale: {{ movie.original_title }}</p>
        <p>Lingua: {{ movie.original_language }}</p>
        <p>Voto: {{ movie.vote_average }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardComponent',
    props: {
      movie: Object,
    },
  };
  </script>
  
  <style scoped>
  .movie-card {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 5px;
    padding: 15px;
    margin: 10px;
    width: 250px; 
    height: 550px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    overflow: auto;
  }
  
  .movie-card img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  
  .card-content {
    padding: 10px;
  }
  </style>
  