<template>
  <div>
    <figure>
      <img :src="imagePath" alt="Mountains">
      <figcaption>
        <h1>{{ item.title || item.name }}</h1>
        <h3>{{ item.original_title || item.original_name}}</h3>
        <div class="d-flex gap-3  flag">
          <p>Lingua originale:</p>
          <img :src="flag" alt="">
        </div>
        <div class="stars">
          <i :class="{'fa-solid': n <= voteStar, 'fa-regular': n > voteStar}" class="fa-star" v-for="n in 5"></i>
        </div>
        <p>{{ item.overview }}</p>
      </figcaption>
    </figure>
  </div>
</template>

<script>
import { store } from '../store';


export default {
  name: 'CardComponent',
  props: {
    item: Object,
  },
  data() {
    return {
      store,
      flags: ['en', 'it', 'es', 'fr', 'ja', 'de', 'ko']
    }
  },
  computed: {
    flag(){
      if(this.flags.includes(this.item.original_language)){
        return `/img/${this.item.original_language}.png`;
      } else {
        return `/img/unknown.png`
      }
    },
    imagePath() {
    if (this.item.poster_path) {
      return this.store.imageUrl + this.item.poster_path;
    } else {
      return '/img/notfound.png';
    }
  },
  voteStar() {
    return Math.ceil(this.item.vote_average / 2);
  },
  }
}
</script>

<style lang="scss" scoped>
h1, h3 {
  color: white;
}
p {
  color: white
}
.stars {
  color: gold;
}
.flag {
  height: 20px;

  img {
    border-radius: 100%;
  }
}

figure {
  display: grid;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  height: 500px;
  border: 1px solid lightgray;

}

img {
  max-width: 100%;
  height: 100%;
}
figure > * {
  grid-area: 1/1;
  transition: .4s;
}
figure figcaption {
  display: grid;
  align-items: end;
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff00;
  padding: .75rem;
  background: var(--c,#0009);
  clip-path: inset(0 var(--_i,100%) 0 0);
}
figure:hover figcaption{
  --_i: 0%;
}
figure:hover img {
  transform: scale(1.2);
}
@supports not (-webkit-mask-clip: text) {
  figure figcaption {
   -webkit-mask: none;
   color: #ffffff;
  }
}


</style>