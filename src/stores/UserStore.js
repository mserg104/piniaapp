import { defineStore } from "pinia";
export const useUserStore=defineStore('userStore',{
    state:()=>({
      users: [],
      activeTab: 2,
    }),
    getters:{
      totalCountMovies(){
        return this.users.length;
      }
    },
    actions:{
      setActiveTab(id){
        this.activeTab=id;
      },      
      deleteUser(id){
        this.users=this.users.filter(el=>el.id!==id)
      }
    }
});
