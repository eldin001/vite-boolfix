<template>
  <div>
    <figure>
      <img :src="store.imageUrl + item.poster_path" alt="Mountains">
      <figcaption>
        <h1>{{ item.title || item.name }}</h1>
        <h3>{{ item.original_title || item.original_name}}</h3>
        <div class="d-flex gap-3  flag">
          <p>Lingua originale:</p>
          <img :src="`/img/${item.original_language}.png`" alt="">
        </div>
        <p>{{ item.vote_average }}</p>
      </figcaption>
    </figure>
  </div>
</template>

<script>
import { store } from '../store';
import axios from 'axios';

export default {
  name: 'CardComponent',
  props: {
    item: Object,
  },
  data() {
    return {
      store,
      languageFlagUrl: null
    }
  },
  async created() {
    try {
      const languageFlagResponse = await axios.get(`https://api.example.com/flags?language=${this.item.original_language}`);
      this.languageFlagUrl = languageFlagResponse.data.url;
    } catch (error) {
      console.error('Failed to fetch language flag:', error);
      // Puoi gestire l'errore qui, ad esempio visualizzando un'immagine di default
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