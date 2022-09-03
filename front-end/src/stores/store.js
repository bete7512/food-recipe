import { defineStore } from 'pinia'
import { register, signin, checkfavorite, addtofavorite, recipequery } from '@/tools/queries';
import { provideApolloClient } from '@vue/apollo-composable';
import apolloClient from './apolloclient'
import router from '../router/index'
import gql from 'graphql-tag'
provideApolloClient(apolloClient);
export const useStore = defineStore("user", {
    state: () => ({
        username: '',
        isauthenticated: false,
        returnUrl: null,
        emailmodal: false
    }),
    actions: {
        async signup(Fname,Lname, username, email, password,) {
            const response = await apolloClient.mutate({
                mutation: register,
                variables: {
                    Fname: Fname,
                    Lname: Lname,
                    username: username,
                    email: email,
                    password: password
                }
            })
            if(response.data.register.Success){
                return response.data.register.Success
                // router.push("/login")
            }
            else{
                return null
            }
        },
        async login(username, password){
            const result = await apolloClient.mutate({
                mutation: signin,
                variables: {
                    username: username,
                    password: password,
                }
            })
            window.localStorage.setItem("Apollotoken", result["data"]["login"]["accessToken"]);
            if (window.localStorage.getItem("Apollotoken")) {
                this.username = username
                this.isauthenticated = true,
                router.push({name:'feeds',params:{id:'recipe'}});
            }
        },
        logout() {
            window.localStorage.removeItem('Apollotoken');
            localStorage.removeItem('user');
            router.push('/login');

        },

    },

    getters: {

    },
    persist: {
        enabled: true
    }

})