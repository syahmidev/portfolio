<template>
    <div class="bg-base-200 flex flex-col gap-12 items-center justify-center p-8">
        <div class="flex flex-wrap gap-4">
            <KeyboardEffect 
                v-for="item in aboutMe" 
                :key="item" 
                :value="item" 
            />
            <div class="kbd bg-secondary indicator resume-text">
                <span class="indicator-item badge badge-accent">download me</span>
                <div class="grid place-items-center text-xl font-black">
                    <a href="/Latest-CV.pdf" download>
                        Resume
                    </a>
                </div>
            </div>
        </div>
        <h1 class="text-5xl font-black">Work Experience</h1>
        <Timeline />
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const aboutMe = ref([
        '23 years old',
        'Kuala Lumpur, Malaysia',
        'wanahmadsyahmi26@gmail.com'
    ]);
</script>

<style scoped>
    .resume-text {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        font-feature-settings: normal;
        font-variation-settings: normal;
    }
</style>