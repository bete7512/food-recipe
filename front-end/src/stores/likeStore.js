import { defineStore } from 'pinia'
import { addlikes,deletelikes } from '@/tools/queries';
import { provideApolloClient } from '@vue/apollo-composable';
import apolloClient from './apolloclient'
import router from '../router/index'
import gql from 'graphql-tag'
provideApolloClient(apolloClient);
export const likeStore = defineStore("like", {
    state: ()=>({
        isliked:false
    }),
    actions: {
        async addtolike(id) {
            const result = await apolloClient.mutate({
                mutation: addlikes,
                variables: {
                    id: id
                }

            })
        },
        async deletelikes(id) {
            const result = await apolloClient.mutate({
                mutation: deletelikes,
                variables: {
                    id: id
                }
            })
        },
    },
    getters: {

    }
})