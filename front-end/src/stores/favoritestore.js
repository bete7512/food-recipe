import { defineStore } from 'pinia'
import { register, signin, checkfavorite, addtofavorite,removefavorite } from '@/tools/queries';
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
                        return true
                    }
                    else{
                        this.isfavorite = false
                        return false
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
        async deletefavorite(id) {
            const result = await apolloClient.mutate({
                mutation: removefavorite,
                variables: {
                    id: id
                }
            })
            // console.log(result.delete_favorite);
            if(result){
                this.isfavorite = false
            }
        },
    },
    getters: {

    }
})