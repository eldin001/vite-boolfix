<template>
    <main>
        <div class="alert alert-danger" v-if="store.error.message">{{ store.error.message }}</div>
        <div v-if="!store.loading">
            <CardList title="Movies:" :list="store.movies" />
            <CardList title="Series:" :list="store.tv" />
        </div>
        <div v-else>
            <ApiLoader />
        </div>
    </main>
</template>

<script>
import { store } from '../store.js';
import CardList from './CardList.vue';
import ApiLoader from './ApiLoader.vue'
export default {
    name: 'MainComponent',
    components: {
        CardList,
        ApiLoader,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<style lang="scss" scoped>
main {
    padding-top: 100px;
}
</style>