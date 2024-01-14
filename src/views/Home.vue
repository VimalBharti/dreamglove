<script setup>
    import Footer from "../components/Footer.vue"
</script>

<template>

  <!-- main -->
    <div class="w-full">
        <img src="https://dac8r2vkxfv8c.cloudfront.net/images/post/9b5e-09-22-ImagesBest%20Youth%20Gloves%20Blog%20Banner%20(1).jpg" alt="" class="h-[85vh] w-full object-cover">
        <div class="grid grid-cols-3">
            <div class="relative group overflow-hidden cursor-pointer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Baltimore_Orioles_batting_gloves_%287436167842%29.jpg/640px-Baltimore_Orioles_batting_gloves_%287436167842%29.jpg" alt="" class="w-full h-full object-cover  group-hover:scale-125 transition duration-700 ease-in-out">
                <div class="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-evenly bg-red-600/50">
                    <span class=" text-white font-bold text-[3em]">Batting <br/> Gloves</span>
                    <RouterLink class="opacity-0 group-hover:opacity-100 bg-gray-900/75 backdrop-blur-md text-white px-5 py-2 rounded-lg" to="/customize">Customize now</RouterLink>
                </div>
            </div>
            <div class="relative group overflow-hidden cursor-pointer">
                <img src="https://preview.thenewsmarket.com/Previews/NBAS/StillAssets/960x540/640682.jpg" alt="" class="w-full h-full object-cover  group-hover:scale-125 transition duration-700 ease-in-out">
                <div class="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-evenly bg-indigo-600/50">
                    <span class=" text-white font-bold text-[3em]">Custom <br/> Gloves</span>
                    <RouterLink class="opacity-0 group-hover:opacity-100 bg-gray-900/75 backdrop-blur-md text-white px-5 py-2 rounded-lg" to="/customize">Customize now</RouterLink>
                </div>
            </div>
            <div class="relative group overflow-hidden cursor-pointer">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBNdMnNIAY33FJW8_A0oPKAIcfpuxNOfXSA&usqp=CAU" alt="" class="w-full h-full object-cover  group-hover:scale-125 transition duration-700 ease-in-out">
                <div class="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-evenly bg-yellow-600/50">
                    <span class=" text-white font-bold text-[3em]">Custom <br/> Belts</span>
                    <RouterLink class="opacity-0 group-hover:opacity-100 bg-gray-900/75 backdrop-blur-md text-white px-5 py-2 rounded-lg" to="/customize">Customize now</RouterLink>
                </div>
            </div>
        </div>

        <section class="p-12">
            <h2 class="font-bold text-[3em] text-center">Our Top Category</h2>
            <p class="text-center mb-12">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ducimus tempore illo <br/> dolorem, exercitationem, sapiente eaque.</p>
            <div class="flex gap-5 h-screen">
                <div class="w-[40%]">
                    <figure class="rounded-2xl overflow-hidden w-full shadow-lg h-full">
                        <img src="/images/image_1.jpeg" class="h-full w-full object-cover">
                    </figure>
                </div>
                <div class="w-[60%] flex flex-col gap-5">
                    <figure class="rounded-2xl overflow-hidden w-full shadow-lg h-[50%]">
                        <img src="/images/image_2.jpeg" class="h-full w-full object-cover">
                    </figure>
                    <div class="grid grid-cols-2 gap-5 h-[50%]">
                        <figure class="rounded-2xl overflow-hidden w-full shadow-lg h-full">
                            <img src="/images/image_3.jpeg" class="h-full w-full object-cover">
                        </figure>
                        <figure class="rounded-2xl overflow-hidden w-full shadow-lg h-full">
                            <img src="/images/image_4.jpeg" class="h-full w-full object-cover">
                        </figure>
                    </div>
                </div>
            </div>
        </section>

        <!-- Featured Products -->
        <section class="p-12">
            <h2 class="font-bold text-[3em] text-center">Featured Products</h2>
            <p class="text-center mb-12">Experience sophistication with every piece - where elegance meets functionality in a <br/> perfect blend of style and practicality.</p>
            <div class="grid grid-cols-4 gap-5">
                <div class="card">
                    <div class="image bg-gray-100 p-5 rounded-xl overflow-hidden shadow h-[50vh] flex items-center justify-center relative group cursor-pointer">
                        <img src="/images/pro_1.png" alt="" class="group-hover:scale-125 transition duration-700 ease-in-out">
                        <button class="bg-white shadow-xl rounded-full h-10 w-10 items-center justify-center absolute top-4 right-4 text-gray-700 hidden group-hover:flex transition duration-300 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3"/></svg>
                        </button>
                        <button class="bg-white shadow-xl rounded-full h-10 w-10 items-center justify-center absolute top-16 right-4 text-gray-700 hidden group-hover:flex transition duration-300 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 256 256"><path fill="currentColor" d="M96 216a16 16 0 1 1-16-16a16 16 0 0 1 16 16m88-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m47.65-125.65l-28.53 92.71A23.89 23.89 0 0 1 180.18 184H84.07A24.11 24.11 0 0 1 61 166.59L24.82 40H8a8 8 0 0 1 0-16h16.82a16.08 16.08 0 0 1 15.39 11.6L48.32 64H224a8 8 0 0 1 7.65 10.35M213.17 80H52.89l23.49 82.2a8 8 0 0 0 7.69 5.8h96.11a8 8 0 0 0 7.65-5.65Z"/></svg>
                        </button>
                    </div>
                    <h3 class="text-xl mt-2 font-bold">Dream As Baby Blue</h3>
                    <h4>$25.00 - $35.00</h4>
                </div>
                <div class="card">
                    <div class="image bg-gray-100 p-5 rounded-xl overflow-hidden shadow h-[50vh] flex items-center justify-center relative group cursor-pointer">
                        <img src="/images/pro_2.png" alt="" class="group-hover:scale-125 transition duration-700 ease-in-out">
                        <button class="bg-white shadow-xl rounded-full h-10 w-10 items-center justify-center absolute top-4 right-4 text-gray-700 hidden group-hover:flex transition duration-300 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3"/></svg>
                        </button>
                        <button class="bg-white shadow-xl rounded-full h-10 w-10 items-center justify-center absolute top-16 right-4 text-gray-700 hidden group-hover:flex transition duration-300 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 256 256"><path fill="currentColor" d="M96 216a16 16 0 1 1-16-16a16 16 0 0 1 16 16m88-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m47.65-125.65l-28.53 92.71A23.89 23.89 0 0 1 180.18 184H84.07A24.11 24.11 0 0 1 61 166.59L24.82 40H8a8 8 0 0 1 0-16h16.82a16.08 16.08 0 0 1 15.39 11.6L48.32 64H224a8 8 0 0 1 7.65 10.35M213.17 80H52.89l23.49 82.2a8 8 0 0 0 7.69 5.8h96.11a8 8 0 0 0 7.65-5.65Z"/></svg>
                        </button>
                    </div>
                    <h3 class="text-xl mt-2 font-bold">Dream Classic Infield Glove 12</h3>
                    <h4>$35.00</h4>
                </div>
                <div class="card">
                    <div class="image bg-gray-100 p-5 rounded-xl overflow-hidden shadow h-[50vh] flex items-center justify-center relative group cursor-pointer">
                        <img src="/images/pro_3.png" alt="" class="group-hover:scale-125 transition duration-700 ease-in-out">
                        <button class="bg-white shadow-xl rounded-full h-10 w-10 items-center justify-center absolute top-4 right-4 text-gray-700 hidden group-hover:flex transition duration-300 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3"/></svg>
                        </button>
                        <button class="bg-white shadow-xl rounded-full h-10 w-10 items-center justify-center absolute top-16 right-4 text-gray-700 hidden group-hover:flex transition duration-300 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 256 256"><path fill="currentColor" d="M96 216a16 16 0 1 1-16-16a16 16 0 0 1 16 16m88-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m47.65-125.65l-28.53 92.71A23.89 23.89 0 0 1 180.18 184H84.07A24.11 24.11 0 0 1 61 166.59L24.82 40H8a8 8 0 0 1 0-16h16.82a16.08 16.08 0 0 1 15.39 11.6L48.32 64H224a8 8 0 0 1 7.65 10.35M213.17 80H52.89l23.49 82.2a8 8 0 0 0 7.69 5.8h96.11a8 8 0 0 0 7.65-5.65Z"/></svg>
                        </button>
                    </div>
                    <h3 class="text-xl mt-2 font-bold">Dream Elbow Guard</h3>
                    <h4>$75.00</h4>
                </div>
                <div class="card">
                    <div class="image bg-gray-100 p-5 rounded-xl overflow-hidden shadow h-[50vh] flex items-center justify-center relative group cursor-pointer">
                        <img src="/images/pro_4.png" alt="" class="group-hover:scale-125 transition duration-700 ease-in-out">
                        <button class="bg-white shadow-xl rounded-full h-10 w-10 items-center justify-center absolute top-4 right-4 text-gray-700 hidden group-hover:flex transition duration-300 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3"/></svg>
                        </button>
                        <button class="bg-white shadow-xl rounded-full h-10 w-10 items-center justify-center absolute top-16 right-4 text-gray-700 hidden group-hover:flex transition duration-300 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 256 256"><path fill="currentColor" d="M96 216a16 16 0 1 1-16-16a16 16 0 0 1 16 16m88-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m47.65-125.65l-28.53 92.71A23.89 23.89 0 0 1 180.18 184H84.07A24.11 24.11 0 0 1 61 166.59L24.82 40H8a8 8 0 0 1 0-16h16.82a16.08 16.08 0 0 1 15.39 11.6L48.32 64H224a8 8 0 0 1 7.65 10.35M213.17 80H52.89l23.49 82.2a8 8 0 0 0 7.69 5.8h96.11a8 8 0 0 0 7.65-5.65Z"/></svg>
                        </button>
                    </div>
                    <h3 class="text-xl mt-2 font-bold">Dream Belt</h3>
                    <h4>$65.00 - $85.00</h4>
                </div>
            </div>
        </section>

        <!-- Subscribe -->
        <section class="p-12">
            <div class="bg-zinc-200 rounded-xl w-full h-full grid grid-cols-3 gap-8 items-center justify-between px-12">
                <img src="/images/pro_3.png" alt="">
                <div>
                    <h3 class="uppercase text-zinc-600">JOIN OUR NEWSLETTER</h3>
                    <h2 class="text-zinc-900 font-bold text-[2.7em]">Get Discount up to <br/> 50% off Today!</h2>
                </div>
                <div>
                    <input type="text" placeholder="Enter your email here" class="outline-none ring-0 border-0 border-b w-full bg-zinc-200 focus:outline-none focus:ring-0 focus:border-b focus:border-zinc-900 px-0 py-3">
                    <button class="w-full p-4 rounded text-white bg-zinc-900 mt-8">Subscribe</button>
                </div>
            </div>
        </section>

        <Footer />
    </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
