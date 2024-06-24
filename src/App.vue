<template>
  <main>
  <header class="header">
    <img src="/logo.svg" alt="logo" class="header-logo">
    <h1>My Favorite Movies</h1>
  </header>
  <div class="tabs">
    <button :class="['btn', { btn_green: movieStore.activeTab === 1 }]" @click="movieStore.setActiveTab(1)">Favorite</button>
    <button :class="['btn', { btn_green: movieStore.activeTab === 2 }]" @click="movieStore.setActiveTab(2)">Search</button>
  </div>

  <div class="movies" v-if="movieStore.activeTab===1">
    <div>
      <h3>Watched movies (count: {{ movieStore.watchedMovies.length }})</h3>
    <Movie v-for="movie of movieStore.watchedMovies" :key="movie.id" :movie="movie" /> 
    </div>
    <h3>All movies (count:{{movieStore.totalCountMovies}})</h3>
    <Movie v-for="movie of movieStore.movies" :key="movie.id" :movie="movie" />   
  </div>
  <div class="search" v-else>
    <Search></Search>
  </div>
</main>
</template>
<script setup>
import Search from './components/Search.vue'
import Movie from './components/Movie.vue'
import {useMovieStore} from './stores/MovieStore'
const movieStore=useMovieStore();
</script>



<style lang="css">
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.header-logo {
  max-width: 50px;
  margin-right: 10px;
}
.btn {
  border: none;
  width: 100px;
  height: 40px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  background: #efefef;
}
.btn:hover {
  opacity: 0.7;
}
.btn_green {
  background: #37df5c;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>
