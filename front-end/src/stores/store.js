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
        returnUrl: '',
        fname:'',
        lname:'',
        email:'',
        profile_image:'',
        bios:'',
        full_name:'',
        public_name:'',

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
                console.log(result);
               localStorage.setItem("Apollotoken", result["data"]["login"]["accessToken"]);
                this.username = username
                // console.log("am from user store" + result["data"]["login"]["id"]);
                this.userid = result.data.login.id
                this.isauthenticated = true,
                 await this.user_profile();
                router.push({ name: 'feeds' });
                return
            } catch (error) {
                console.log(error);
                return error.message
            }
        },
        async user_profile() {
            try {
                const result = await apolloClient.query({
                    query: user_profile_query,
                    variables: {
                        id: this.userid
                    }
                })
                this.fname = result.data.users_by_pk.fname
                this.lname = result.data.users_by_pk.lname
                this.email = result.data.users_by_pk.email
                this.full_name = result.data.users_by_pk.full_name
                this.bios = result.data.users_by_pk.bios
                this.profile_image = result.data.users_by_pk.profile_image
                this.public_name = result.data.users_by_pk.public_name
                this.username = result.data.users_by_pk.username
               
            } catch (error) {

            }
        },
        logout() {
            localStorage.removeItem('Apollotoken');
            localStorage.removeItem('user');
            this.isauthenticated = false,
            router.push('/');
        },
    },
    getters: {
        user_data(){
            const user = window.localStorage.getItem("user")
            console.log("object object" + JSON.parse(user));
           return JSON.parse(user)
        }
    },
    persist: {
        enabled: true,
        mode: "localSession"
    }

})