import { defineStore } from "pinia"
import products from "../assets/json/products"

export const useProducts = defineStore("products", {
    state: () => ({
        products: products,
        product: '',
        cart: []
    }),
    actions: {
        getProducts(category) {
            this.product = (this.products.product.map(product => product))
                .filter(productCat => productCat.category.toLowerCase().includes(category.toLowerCase()))
        },

        search(query){
            this.product = (this.products.product.map(product => product))
                .filter(searched => searched.name.toLowerCase().includes(query.toLowerCase()))
        },

        retainProduct(route){
            this.product = this.products.product.map(product => product)
                .find(productToRetain => productToRetain.name.toLowerCase() === route)
        },

        retainProducts(routeType, routeCat){
            this.product = (this.products.product.map(product => product))
                .filter(productsToRetain => productsToRetain.type.toLowerCase() == routeType && productsToRetain.category.toLowerCase() == routeCat)
        },

        addProductToCart(data){
            this.cart.push(data)
            console.log(this.cart);
        }
    }
})
