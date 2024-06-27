import { defineStore } from "pinia";
import { useUserStore } from "./UserStore";
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
          this.users = data;
          this.loader = false;
        },
        addToUsers(object){
          const userStore=useUserStore();
          userStore.users.push({...object});
          userStore.activeTab=1;
          console.log(object);
        }
      },

});