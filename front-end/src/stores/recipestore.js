import { defineStore } from 'pinia'
import { recipequery } from '@/tools/queries';
import { provideApolloClient } from '@vue/apollo-composable';
import apolloClient from './apolloclient'

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
            }).then((response) => {
                let i = 0;
                for (; i < response.data.recipe.length; i++) {
                    this.recipe[i] = response.data.recipe[i]
                }
                console.log(response.data.recipe);
            })
            .catch((err)=>{
                console.log(err)})
            }
        },
persist: {
    enabled: true
}
})