import { defineStore } from 'pinia'
import { register, signin, checkfavorite, addtofavorite, recipequery } from '@/tools/queries';
import { provideApolloClient } from '@vue/apollo-composable';
import apolloClient from './apolloclient'
import router from '../router/index'
import gql from 'graphql-tag'
provideApolloClient(apolloClient);
export const recipeStore = defineStore("favorite", {
    state: () => ({
    }),
    actions: {
        fetchrecipe() {
            // let cards = []
            // console.log(this.cards);
            const result = apolloClient.query({
                query: recipequery
            }).then((response) => {
                // console.log(response.data.recipe)
                response.data.recipe.map((element)=>this.cards.push(element))
                // cards = response?.response ?? []
                // console.log();
                // var i = 0
                // response.data.recipe.forEach((element) => {
                //     // cards.push(element);
                //     cards[i]=element
                //     // console.log(element);
                //     i++;
                // });
                // response.data.recipe.map((index) => )
            })
            // console.log();
            // console.log(this.cards);
            // console.log(result);

            return null
        }
    },
    getters: {

    }
})