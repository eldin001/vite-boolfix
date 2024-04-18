
<template>
     <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="Movie Poster" />
      </div>
      <div class="flip-card-back">
        <h3>{{ movie.title }}</h3>
        <p>Titolo Originale: {{ movie.original_title }}</p>
        <p>Lingua: {{ movie.original_language }}</p>
        <p>Voto: {{ movie.vote_average }}</p>
      </div>
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

.flip-card {
  background-color: transparent;
  width: 300px;
  height: 400px;
  perspective: 1000px;
}

img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;

}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: transparent;
  color: black;
}

.flip-card-back {
  background-color: black;
  color: white;
  transform: rotateY(180deg);
  padding: 20px;
}
  </style>
  