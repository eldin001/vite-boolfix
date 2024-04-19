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
        <p>{{ item.vote_average }}</p>
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
    // Verifica se item.poster_path è valido e non vuoto
    if (this.item.poster_path) {
      // Se è valido, restituisci il percorso completo dell'immagine
      return this.store.imageUrl + this.item.poster_path;
    } else {
      // Se non è valido, restituisci il percorso di un'immagine di fallback
      return '/img/notfound.png';
    }
  }
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