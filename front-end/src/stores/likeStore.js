import { defineStore } from 'pinia'
import { addlikes,deletelikes } from '@/tools/queries';
import { provideApolloClient } from '@vue/apollo-composable';
import apolloclient from '../apollo'
provideApolloClient(apolloclient);
export const likeStore = defineStore("like", {
    state: ()=>({
        isliked:false
    }),
    actions: {
        async addtolike(id) {
            const result = await apolloclient.mutate({
                mutation: addlikes,
                variables: {
                    id: id
                }

            })
        },
        async deletelikes(id) {
            const result = await apolloclient.mutate({
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