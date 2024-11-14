<template>
    <div class="avatar online">
        <div class="w-16 rounded-full">
            <a :href="link">
                <img :src="image"/>
            </a>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        image: String,
        link: String
    })
</script>