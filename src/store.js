import { reactive} from 'vue';

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    endPoint: {
        movie: 'search/movie',
        series: 'search/tv',
    },
    options:{
        params:{
            api_key: 'cff4a1166def8a6357ad9e59123efd6c',
            query: 'a',

        }
    }
})