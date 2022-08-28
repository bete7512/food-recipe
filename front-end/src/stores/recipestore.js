import { defineStore } from 'pinia'
import { register, signin, checkfavorite, addtofavorite, recipequery } from '@/tools/queries';
import { provideApolloClient } from '@vue/apollo-composable';
import apolloClient from './apolloclient'
import router from '../router/index'
import gql from 'graphql-tag'
provideApolloClient(apolloClient);
export const recipeStore = defineStore("recipe",{
    state: () => ({
        recipe: [],
        error:[]
    }),
    actions: {
        fetchrecipe() {
            const result = apolloClient.query({
                query: recipequery,
                //  pollInterval: 1000,
            }).then((response) => {
                let i = 0;
                for (; i < response.data.recipe.length; i++) {
                    this.recipe[i] = response.data.recipe[i]
                }
                console.log(response.data.recipe);
            })
            .catch((err)=>{
                console.log(err)})
                // console.log("jnlljnlnmmm");
            }
        },
persist: {
    enabled: true
}
})