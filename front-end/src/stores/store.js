import { defineStore } from 'pinia'
import { register, signin, checkfavorite, addtofavorite, recipequery } from '@/tools/queries';
import { provideApolloClient } from '@vue/apollo-composable';
import apolloClient from './apolloclient'
import router from '../router/index'
import gql from 'graphql-tag'
provideApolloClient(apolloClient);
export const useStore = defineStore("user", {
    state: () => ({
        username:'',
        isauthenticated: false,
        counter: 200,
        returnUrl: null,
        emailmodal: false
    }),
    actions: {
        async signup(name, username, email, password,) {
            const response = await apolloClient.mutate({
                mutation: register,
                variables: {
                    username: username,
                    email: email,
                    name: name,
                    password: password
                }
            })
            if (response.data.register.Success) {
                router.push("/login")
            }
        },
        async login(username, password) {
            const result = await apolloClient.mutate({
                mutation: signin,
                variables: {
                    username: username,
                    password: password,
                }
            })
            window.localStorage.setItem("Apollotoken", result["data"]["login"]["accessToken"]);
            if (window.localStorage.getItem("Apollotoken")) {
                // this.user = {
                //     username: username,
                //     token: window.localStorage.getItem("Apollotoken")
                // },
                this.username = username
                    this.isauthenticated = true,
                    console.log(window.localStorage.getItem("Apollotoken"))
                window.localStorage.setItem('user', JSON.stringify(this.user));
                router.push('/main/feeds');
            }
        },
        logout() {
            window.localStorage.removeItem('Apollotoken');
            this.username = {};
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