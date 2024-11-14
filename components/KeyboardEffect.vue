<template>
    <kbd class="kbd text-xl font-black">{{ value }}</kbd>
</template>

<script setup>
    defineProps({
        value: String
    })
</script>