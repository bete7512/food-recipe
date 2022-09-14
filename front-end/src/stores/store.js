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
        async signup(fname, lname, username, email, password,) {
            try {
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
                return response.data.register.Success
            } catch (error) {
                return error.message
            }
        },
        async login(username, password) {
            try {
                const result = await apolloClient.mutate({
                    mutation: signin,
                    variables: {
                        username: username,
                        password: password,
                    }
                })
                window.localStorage.setItem("Apollotoken", result["data"]["login"]["accessToken"]);
                this.username = username
                this.isauthenticated = true,
                    router.push({ name: 'feeds' });
                return
            } catch (error) {
                return error.message
            }
        },
        logout() {
            window.localStorage.removeItem('Apollotoken');
            localStorage.removeItem('user');
            this.isauthenticated = false
        
             router.push('/');
        },
    },
    getters: {
    },
    persist: {
        enabled: true
    }

})