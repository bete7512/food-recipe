import { defineStore } from 'pinia'
import { recipequery,addrecipe, file_upload } from '@/tools/queries';
import { provideApolloClient } from '@vue/apollo-composable';
import apolloClient from './apolloclient'

provideApolloClient(apolloClient);
export const recipeStore = defineStore("recipe",{
    state: () => ({
        recipe: [],
        error:[]
    }),
    actions: {
        async addrecipe(){
            try {
                const response = apolloClient.mutate({
                    mutation:addrecipe,
                    variables:{

                    }
                })
            } catch (error) {
                
            }
        },
        async upload_file(object){
            try {
                const response =await apolloClient.mutate({
                    mutation:file_upload,
                    variables:{
                        name:object.file.name,
                        type:object.file.type,
                        base64str:object.base64str
                    }
                })
                console.log("from store"+response.data.fileupload.file_path);
                return response.data.fileupload.file_path;
            } catch (error) {
            console.log(error);
            }
        },
        },
persist: {
    enabled: true
}
})