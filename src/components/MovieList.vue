<template>
    <div id="movie-list">
        <div v-if="filteredMovies.length">
        <movie-item v-for="movie in filteredMovies" v-bind:movie="movie.movie"></movie-item>
        </div>
        <div v-else-if="movies.length" class="no-results">No results.</div>
        <div v-else>Loading...</div>
    </div>
</template>
<script>
import genres from '../util/genres';
import MovieItem from './MovieItem.vue';

export default {
    props: ['genre', 'time', 'movies'],
    methods: {
        moviePassesGenreFilter(movie) {
            if (!this.genre.length) {
                return true;
            }
            const moviesGenres = movie.movie.Genre.split(', ');
            let matched = true;
            this.genre.forEach(genre => {
                if (moviesGenres.indexOf(genre) === -1) {
                    matched = false;
                }
            });
            return matched;
        }
    },
    computed: {
        filteredMovies() {
            return this.movies.filter(this.moviePassesGenreFilter);
        }
    },
    components: {
        MovieItem
    }
}
</script>
