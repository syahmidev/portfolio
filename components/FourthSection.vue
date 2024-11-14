<template>
    <div class="bg-base-200 flex flex-col gap-8 justify-center p-8">
        <div class="divider divider-primary m-0"></div>
        <h1 class="mx-auto text-5xl font-black">Some Of My Projects</h1>
        <div 
            v-for="data in datas"
            :key="data"
            class="flex flex-col md:flex-row gap-4 items-start"
        >
            <StackedCards :class="data.class1" :background="data.background" :title="data.title" :description="data.description"/>
            <Browser :class="data.class2" :url="data.url" :image="data.image"/>
        </div>
    </div>
</template>

<script setup>
    const datas = ref([
        {
            background: 'bg-primary',
            title: 'Wordpress',
            description: 'A corporate website for a company that provides nutrition products for its clients.',
            class1: '',
            class2: 'w-full',
            url: 'https://dnutric.net',
            image: '/dnutric.png',
        },
        {
            background: 'bg-secondary',
            title: 'Laravel',
            description: 'A system for students and teachers in a school to manage summons and payments.',
            class1: 'order-1 md:order-2',
            class2: 'order-2 md:order-1 w-full',
            url: 'http://puomerit.herokuapp.com',
            image: '/puomerit.jpeg',
        },
        {
            background: 'bg-primary',
            title: 'Laravel, Vue, Inertia & Vite',
            description: 'An event ticketing management system where users can create events, purchase tickets, and manage their event tickets.',
            class1: '',
            class2: 'w-full',
            url: 'localhost:3000/ticketing-app',
            image: '/ticket.png',
        }
    ])
</script>