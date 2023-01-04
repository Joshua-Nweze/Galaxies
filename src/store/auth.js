import { defineStore } from "pinia";

export const useAuth = defineStore("auth", {
    state: () => ({
        isLoggedIn: true,
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
            this.saved.push(product)

            console.log(this.saved, this.product);
        }
    }
})