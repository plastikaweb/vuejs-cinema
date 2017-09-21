import './style.scss';

import Vue from 'vue';
import VueResource from 'vue-resource';

import MovieFilter from './components/MovieFilter.vue';
import MovieList from './components/MovieList.vue';

Vue.use(VueResource);
new Vue({
  el: '#app',
  data: {
    genre: [],
    movies: [],
    time: []
  },
  methods: {
    checkFilter(category, title, checked) {
      if (checked) {
        this[category].push(title);
      } else {
        const index = this[category].indexOf(title);
        if (index > -1) {
          this[category].splice(index, 1);
        }
      }
    }
  },
  components: {
    MovieList,
    MovieFilter
  },
  created() {
      this.$http.get('/api').then(response => {
          this.movies = response.data;
      });
  }
});
