import { defineStore } from "pinia"
import products from "../assets/json/products"

export const useProducts = defineStore("products", {
    state: () => ({
        products: products,
        product: ''
    }),
    actions: {
        getProducts(products, category) {
            this.product = (products[0].map(product => product))
                .filter(productCat => productCat.category.toLowerCase().includes(category.toLowerCase()))
        },

        search(products, query){
            this.product = (products[0].map(product => product))
                .filter(searched => searched.name.toLowerCase().includes(query.toLowerCase()))
            console.log(this.product);
        }
    }
})
