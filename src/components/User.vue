<template>
    <div>
        <div class="movie-name">
        {{ user.name }} ({{ user.username }})
    </div>
        <div class="movie-buttons">
        <button
          class="btn btn_green"
          @click="searchStore.addToUsers(user)">
          Add
        </button>
      </div>  
    </div>
</template>
<script setup>
import { useSearchStore } from '../stores/SearchStore';
const searchStore=useSearchStore();
const props=defineProps({
    user:{
        type:Object,
        required:true,
        default:()=>{}
    },
    isSearch:{
      type:Boolean,
      required:false,
      default:false
    }
})
</script>
<style lang="css" scoped>
.movie {
  display: grid;
  grid-template-columns: 200px 1fr;
  column-gap: 30px;
  margin-bottom: 20px;
  border: 2px solid #efefef;
  padding: 10px;
  border-radius: 10px;
}

.movie-accept {
  margin-right: 10px;
}

.movie-img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
}

.movie-name {
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-bottom: 20px;
}

.movie-overview {
  display: block;
  margin-bottom: 20px;
}

.movie-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.movie-buttons-watched {
  color: #fff;
  background: #1eb4c3;
}

.movie-buttons-watched__icon {
  width: 15px;
  margin-left: 10px;
}

.movie-buttons-delete {
  color: #fff;
  background: #ff2a2a;
}
</style>