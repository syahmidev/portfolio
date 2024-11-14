<template>
    <div class="stack">
        <div class="card text-primary-content shadow-md" :class="background">
            <div class="card-body">
                <h2 class="card-title">{{ title }}</h2>
                <p>{{ description }}</p>
            </div>
        </div>
        <div class="card text-primary-content shadow" :class="background">
            <div class="card-body">
                <h2 class="card-title">{{ title }}</h2>
                <p>{{ description }}</p>
            </div>
        </div>
        <div class="card text-primary-content shadow-sm" :class="background">
            <div class="card-body">
                <h2 class="card-title">N{{ title }}</h2>
                <p>{{ description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        title: String,
        description: String,
        background: String
    })
</script>