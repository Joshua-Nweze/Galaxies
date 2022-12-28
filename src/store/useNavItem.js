import { defineStore } from "pinia";
import navItems from "@/assets/json/nav.json"

export const useNavItem = defineStore("navItems", {
    state: () => ({
        navItems: navItems
    })
})