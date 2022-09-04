import { defineStore } from 'pinia'
import { register, signin } from '@/tools/queries';
import { provideApolloClient } from '@vue/apollo-composable';
import apolloClient from './apolloclient'
import router from '../router/index'
provideApolloClient(apolloClient);
export const useStore = defineStore("user", {
    state: () => ({
        username: '',
        isauthenticated: false,
        returnUrl: null,
        emailmodal: false
    }),
    actions: {
        async signup(fname,lname, username, email, password,) {
            const response = await apolloClient.mutate({
                mutation: register,
                variables: {
                    fname: fname,
                    lname: lname,
                    username: username,
                    email: email,
                    password: password
                }
            })
            if(response.data.register.Success){
                return response.data.register.Success
            }
            else{
                return null
            }
            // return response.data.register.Success
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
            router.push('/');
        },
    },
    getters: {
    },
    persist: {
        enabled: true
    }

})