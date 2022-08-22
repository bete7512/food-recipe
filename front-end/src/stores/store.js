import { defineStore } from 'pinia'
import { register,signin} from '@/tools/queries';
import { provideApolloClient } from '@vue/apollo-composable';
import apolloClient from './apolloclient'
import  router  from '../router/index'
provideApolloClient(apolloClient);
export const useStore = defineStore("user", {
    state: () => ({
        emailconfirm: false,
        isauthenticated: false,
        counter: 200,
        returnUrl: null,
        user: {}
    }),
    
    actions: {
        async signup(name, username,email,password,) {
            const response = await apolloClient.mutate({
                mutation: register,
                variables: {
                    username: username,
                    email: email,
                    name: name,
                    password: password
                }
            })
            if (response.data.register.success){
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
                this.user = {
                    username: username,
                    token: window.localStorage.getItem("Apollotoken")
                },
                this.isauthenticated = true,
                console.log( window.localStorage.getItem("Apollotoken"))
                window.localStorage.setItem('user', JSON.stringify(this.user));
                router.push('/main/feeds');
            }
        },
        logout() {
            window.localStorage.removeItem('Apollotoken');
            this.user = {};
            localStorage.removeItem('user');
            router.push('/login');
        }
    },
    getters: {
    }
})