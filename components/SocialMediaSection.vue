<template>
    <div class="bg-base-200 flex flex-col gap-8 justify-center p-8">
        <div class="divider divider-primary m-0"></div>
        <h1 class="mx-auto text-5xl font-black">Follow Me!</h1>
        <!-- Alert for akses reka -->
        <div role="alert" class="alert ">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="h-6 w-6 shrink-0 stroke-current">
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>my friend and I at <a class="link link-primary" href="https://www.aksesreka.com/">https://www.aksesreka.com/</a> are here to power your business with top-notch server hosting, custom website development, and SEO solutions that drive growth and success <3</span>
        </div>
        <div class="flex flex-wrap justify-center items-center gap-4">
            <!-- LinkedIn -->
            <Avatar image="https://cdn-icons-png.flaticon.com/512/174/174857.png" link="https://www.linkedin.com/in/wan-ahmad-syahmi-0a5211221/" />
            <!-- Github -->
            <Avatar image="https://cdn-icons-png.flaticon.com/512/25/25231.png" link="https://github.com/syahmidev" />
        </div>
    </div>
</template>

<!-- <script setup>
    import SkullJSON from 'public/attention.json'
</script> -->