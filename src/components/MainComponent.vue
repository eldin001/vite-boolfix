<template>
    <main>
        <div v-if="store.searched">
            <div class="alert alert-danger" v-if="store.error.message">{{ store.error.message }}</div>
            <div v-if="!store.loading">
                <CardList title="Movies:" :list="store.movies" />
                <CardList title="Series:" :list="store.tv" />
            </div>
            <div v-else>
                <ApiLoader />
            </div>
        </div>
        <div v-else>
            <div class="main-cont d-flex ">
                <div class="left d-flex justify-content-center align-items-start ps-5 flex-column ">
                    <h1 class="display-1 fw-bolder lh-lg">Benvenuto!</h1>
                    <p class="fs-4 text-decoration-underline">Naviga nel nostro catalogo e scopri centinaia di contenuti di intrattenimento.</p>
                </div>
                <div class="right">
                    <video playsinline autoplay muted loop  id="bgvid">
                        <source src="/img/JOHN WICK 3 - PARABELLUM (2019) - Trailer Italiano Ufficiale  HD.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
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

.left {
    height: calc(100vh - 100px);
    background-color: #E50815;
    width: 50%;
}

.right {
    height: calc(100vh - 100px);
    background-color: green;
    width: 50%;
}

p {
    color: rgb(210, 210, 210);
}

video {
  object-fit: cover;  
  width: 100%;
  height: 100%;
}

</style>