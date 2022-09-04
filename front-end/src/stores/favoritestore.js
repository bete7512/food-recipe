import { defineStore } from 'pinia'
import {  addtofavorite,removefavorite } from '@/tools/queries';
import { provideApolloClient } from '@vue/apollo-composable';
import apolloClient from './apolloclient'
provideApolloClient(apolloClient);
export const favoriteStore = defineStore("favorite", {
    state: ()=>({
        isfavorite:false
    }),
    actions: {
        async addtofavor(id) {
            const result = await apolloClient.mutate({
                mutation: addtofavorite,
                variables: {
                    recipe_id: id
                }

            })
        },
        async deletefavorite(id) {
            const result = await apolloClient.mutate({
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