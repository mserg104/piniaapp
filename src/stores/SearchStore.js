import { defineStore } from "pinia";
const url="https://jsonplaceholder.typicode.com/users";
export const useSearchStore=defineStore('searchStore',{

    state: () => ({
        loader: false,
        users: [],
      }),
      actions: {
        async getMovies(search) {            
          this.loader = true;
          const res = await fetch(`${url}`);
          const data = await res.json();
          console.log(data);
          this.users = data.results;
          this.loader = false;
        },
      },

});