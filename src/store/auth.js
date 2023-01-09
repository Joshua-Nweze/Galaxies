import { defineStore } from "pinia";

export const useAuth = defineStore("auth", {
    state: () => ({
        isLoggedIn: false,
        saved: []
    }),

    actions: {
        loginUser(){
            this.isLoggedIn = true;
        },
        
        logoutUser(){
            this.isLoggedIn = false;
        },

        addToSaved(product){
            this.saved.unshift(product)
        },

        delSavedItem(index){
            this.saved.splice(index, 1)
        }
    }
})