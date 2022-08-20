<template>
        <div class=" bg-blue-600 h-28 items-center flex justify-center text-6xl font-extrabold">
            <h1><span class="text-yellow-900">Discover</span> Recipe</h1>
        </div>
<section class="">
    <div class=" items-center px-5 py-12 lg:px-20">
        <div class="flex flex-col w-full max-w-md shadow-xl p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0">
            <div class="mt-8">
                <div class="mt-6">
                    <form action="#" method="POST" class="space-y-6">
                                                <div>
                            <label for="name" class="block text-sm font-medium text-neutral-600">Name</label>
                            <div class="mt-1">
                                <input id="name" name="email" type="text" autocomplete="name" placeholder="your name" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300">
                            </div>
                        </div>
                                                <div>
                            <label for="email" class="block text-sm font-medium text-neutral-600">Email</label>
                            <div class="mt-1">
                                <input id="email" name="email" type="email" autocomplete="email" placeholder="your email" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300">
                            </div>
                        </div>
                                                <div>
                            <label for="username" class="block text-sm font-medium text-neutral-600">Username</label>
                            <div class="mt-1">
                                <input id="username" name="username" type="text" autocomplete="username"  placeholder="username" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300">
                            </div>
                        </div>
                        <div class="space-y-1">
                            <label for="password" class="block text-sm font-medium text-neutral-600"> Password </label>
                            <div class="mt-1">
                                <input id="password" name="password" type="password" autocomplete="current-password"  placeholder="Your Password" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300">
                            </div>
                        </div>

                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" placeholder="Your password" class="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500">
                                <label for="remember-me" class="block ml-2 text-sm text-neutral-600"> Remember me </label>
                            </div>

                            <div class="text-sm">
                                <a href="#" class="font-medium text-blue-600 hover:text-blue-500 px-2"> Forgot your password? </a>
                            </div>
                        </div>

                        <div>
                            <button type="submit" class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Sign up</button>
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


</script>
<style scoped>
.overlay {
    position: fixed;
    background-color: rgb(0, 0, 0, 0.3);
    z-index: 100;
}
</style>