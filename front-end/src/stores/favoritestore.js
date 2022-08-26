import { defineStore } from 'pinia'
import { register, signin, checkfavorite, addtofavorite, recipequery } from '@/tools/queries';
import { provideApolloClient } from '@vue/apollo-composable';
import apolloClient from './apolloclient'
import router from '../router/index'
import gql from 'graphql-tag'
provideApolloClient(apolloClient);
export const favoriteStore = defineStore("favorite", {
    state: ()=>({
        isfavorite:false
    }),
    actions: {
        checkfavorite(id) {
            try {
                const result = apolloClient.query({
                    query: checkfavorite,
                    variables:{id:id}
                }).then((response) => {
                    if(response.data.favorite){
                        this.isfavorite = true
                    }
                    else{
                        this.isfavorite = false
                    }
                })
            } catch (error) {
                console.log(error);
            }
        },
        async addtofavor(id) {
            const result = await apolloClient.mutate({
                mutation: addtofavorite,
                variables: {
                    recipe_id: id
                }

            })
        },
    },
    getters: {

    }
})