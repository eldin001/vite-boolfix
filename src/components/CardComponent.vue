<template>
  <div>
    <figure>
      <img :src="store.imageUrl + item.poster_path" alt="Mountains">
      <figcaption>
        <h5>{{ item.title || item.name }}</h5>
        <p>{{ item.original_title || item.original_name}}</p>
        <p>{{ item.original_language }}</p>
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
    }
  }
}
</script>

<style lang="scss" scoped>
figure {
  display: grid;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
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
  color: #0000;
  padding: .75rem;
  background: var(--c,#0009);
  clip-path: inset(0 var(--_i,100%) 0 0);
  -webkit-mask:
    linear-gradient(#000 0 0),
    linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  -webkit-mask-clip: text, padding-box;
  margin: -1px;
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
   color: #fff;
  }
}


</style>