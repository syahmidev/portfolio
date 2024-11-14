<template>
    <div class="mockup-browser bg-base-300 border">
        <div class="mockup-browser-toolbar">
            <div class="input">{{ url }}</div>
        </div>
        <div class="bg-base-200 flex justify-center px-4 pb-4">
            <img :src="image" alt="website-img" class="rounded-xl">
        </div>
    </div>
</template>

<script setup>
    defineProps({
        url: String,
        image: String,
    })
</script>