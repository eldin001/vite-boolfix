<template>
    <div>
        <CardList title="Movies" :list="store.movies"/>
        <CardList title="Series" :list="store.tv"/>
    </div>
</template>

<script>
import { store } from '../store.js';
import CardList from './CardList.vue'
    export default {
        name: 'MainComponent',
        components: {
            CardList,
        },
        data() {
            return {
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>