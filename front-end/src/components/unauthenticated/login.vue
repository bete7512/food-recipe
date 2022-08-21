<template>
        <div class=" bg-blue-600 h-28 items-center flex justify-center text-6xl font-extrabold">
            <h1><span class="text-yellow-900">Discover</span> Recipe</h1>
        </div>
        <section class="">
            <div class=" items-center px-5 py-6 lg:px-20 ">
                <div
                    class="flex flex-col w-full shadow-2xl max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0">
                    <div class="mt-8">
                        <div class="mt-6">
                            <form action="#" method="POST" class="space-y-6">
                                <div>
                                    <label for="email"
                                        class="block text-sm font-medium text-neutral-600">username</label>
                                    <div class="mt-1">
                                        <input id="email" name="email" type="email" autocomplete="email" 
                                            placeholder="username"
                                            class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300">
                                    </div>
                                </div>

                                <div class="space-y-1">
                                    <label for="password" class="block text-sm font-medium text-neutral-600"> Password
                                    </label>
                                    <div class="mt-1">
                                        <input id="password" name="password" type="password"
                                            autocomplete="current-password"  placeholder="Your Password"
                                            class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300">
                                    </div>
                                </div>

                                <div class="flex items-center justify-between">
                                    <div class="flex items-center">
                                        <input id="remember-me" name="remember-me" type="checkbox"
                                            placeholder="Your password"
                                            class="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500">
                                        <label for="remember-me" class="block ml-2 text-sm text-neutral-600"> Remember
                                            me </label>
                                    </div>

                                    <div class="text-sm">
                                        <a href="#" class="font-medium text-blue-600 hover:text-blue-500 px-2"> Forgot
                                            your password? </a>
                                    </div>
                                    <!-- <div class="text-sm">
                                        <router-link to="/adminlogin" class="font-medium text-blue-600 hover:text-blue-500 px-2">admin
                                        </router-link>
                                    </div> -->
                                </div>

                                <div>
                                    <router-link :to="{name :'main'}">


                                        <button 
                                            class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Sign
                                        in</button>
                                    </router-link>
                                </div>
                            </form>
                            <div class="relative my-4">
                                <div class="absolute inset-0 flex items-center">
                                    <div class="w-full border-t border-gray-300"></div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
   
</template>
<script setup lang="ts">


// import { ref } from 'vue';
// import { useRoute, useRouter } from 'vue-router';
// const router = useRouter()
// const route = useRoute()
// const emit = defineEmits(['loginclose'])
// const loginclose = (event) => {
//     emit("loginclose")
// }
// const verify = ref(true)
// const failure = ref(false)
// const error = ref('')
// const user = useStore()
// const username = ref('')
// const password = ref('')
// // const { user: { username, password } } = storeToRefs(user)
// const onsubmit = () => {
//     console.log("something");
//     // console.log(user.login(username.value,password.value))
//     user.login(username.value, password.value)
//     console.log("after login");
// }
// const token = window.localStorage.getItem("Apollotoken");
// const validate = () => {
//     if (!username.value || !password.value) {
//         failure.value = true
//         error.value = "username passwords shouldnot be empty"
//     }
//     else {
//         // Login();
//         if (!window.localStorage.getItem("Apollotoken")) {
//             failure.value = true
//             error.value = "server error"
//         }
//         else {
//             // user.username = username.value
//             // user.isauthenticated = true
//             // user.token = window.localStorage.getItem("Apollotoken")
//             router.push({
//                 name: 'dashboard',
//                 params: {
//                     id: "dashboard",
//                     name: username.value,
//                     params: {
//                         refetch: true
//                     }
//                 },
//                 query: {
//                     ...route.query
//                 }
//             })
//         }
//     }
// }
</script>
<style scoped>
.overlay {
    position: fixed;
    background-color: rgb(0, 0, 0, 0.3);
}
</style>