import { defineStore } from 'pinia'
import { register, signin, user_profile_query } from '@/tools/queries';
import { provideApolloClient } from '@vue/apollo-composable';
import apolloClient from './apolloclient'
import router from '../router/index'
provideApolloClient(apolloClient);

export const useStore = defineStore("user", {
    state: () => ({
        user:{},
        username: '',
        userid: '',
        isauthenticated: false,
        returnUrl: null,
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
        async login(username, password){
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
                // console.log("am from user store" + result["data"]["login"]["id"]);
                this.userid = result.data.login.id
                this.isauthenticated = true,
                    router.push({ name: 'feeds' });
                return
            } catch (error) {
                return error.message
            }
        },
        logout() {
            window.localStorage.removeItem('Apollotoken');
            // localStorage.removeItem('user');
            this.isauthenticated = false,
            // useStore.$reset()
            router.push('/');
        },
    },
    getters: {
        async user_profile() {
            try {
                const result = await apolloClient.query({
                    query: user_profile_query,
                    variables: {
                        id: this.userid
                    }
                })
                console.log(result.data);
                this.user.fname = result.data.users_by_pk.fname
                this.user.lname = result.data.users_by_pk.lname
                this.user.email = result.data.users_by_pk.email
                this.user.full_name = result.data.users_by_pk.full_name
                this.user.bios = result.data.users_by_pk.bios
                this.user.profile_image = result.data.users_by_pk.profile_image
                this.user.publicname = result.data.users_by_pk.public_name
            } catch (error) {

            }
        },
    },
    persist: {
        enabled: true,
        mode: "localSession"
    }

})