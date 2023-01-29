import { defineStore } from 'pinia'
import {  addtofavorite,removefavorite } from '@/tools/queries';
import { provideApolloClient } from '@vue/apollo-composable';
import apolloclient from '../apollo'
provideApolloClient(apolloclient);
export const favoriteStore = defineStore("favorite", {
    state: ()=>({
        isfavorite:false
    }),
    actions: {
        async addtofavor(id) {
            const result = await apolloclient.mutate({
                mutation: addtofavorite,
                variables: {
                    recipe_id: id
                }

            })
        },
        async deletefavorite(id) {
            const result = await apolloclient.mutate({
                mutation: removefavorite,
                variables: {
                    id: id
                }
            })
            if(result){
                this.isfavorite = false
            }
        },
    },
    getters: {
    }
})