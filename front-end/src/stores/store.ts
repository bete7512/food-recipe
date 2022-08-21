import { defineStore } from 'pinia'
import { loginqueries, signupqueries } from '../tools/queries'
import { provideApolloClient } from '@vue/apollo-composable';
import apolloClient from './apolloclient'
import  router  from '../router/index'
provideApolloClient(apolloClient);
export const useStore = defineStore("user", {
    state: () => ({
        authuser: JSON.parse(window.localStorage.getItem('user')),
        emailconfirm: false,
        isauthenticated: false,
        counter: 200,
        returnUrl: null,
        user: {}
    }),
    
    actions: {
        async signup(name:string, username:string, email:string, password:string) {
            const response = await apolloClient.mutate({
                mutation: signupqueries,
                variables: {
                    username: username,
                    email: email,
                    name: name,
                    password: password
                }
            })
            if (response.data.register.success) {
            }
        },
        async login(username:string, password:string) {
            const result = await apolloClient.mutate({
                mutation: loginqueries,
                variables: {
                    username: username,
                    password: password,
                }
            })
            window.localStorage.setItem("Apollotoken", result.data.signin.token);
            if (window.localStorage.getItem("Apollotoken")) {
                this.user = {
                    username: username,
                    isauthenticated: true,
                    token: window.localStorage.getItem("Apollotoken")
                }
                window.localStorage.setItem('user', JSON.stringify(this.user));
                router.push(this.returnUrl || '/dashboard');
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
        doublecount: (state) => state.counter * 2
    }
})