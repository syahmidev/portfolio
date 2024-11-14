<template>
    <div class="bg-base-200 flex flex-col gap-8 justify-center p-8">
        <div class="divider divider-primary m-0"></div>
        <h1 class="mx-auto text-5xl font-black">Some Of My Projects</h1>
        <div class="flex flex-col md:flex-row gap-4 items-start">
            <StackedCards background="bg-primary" title="Wordpress" description="A corporate website for a company that provides nutrition products for its clients."/>
            <Browser class="w-full" url="https://dnutric.net" image="/dnutric.png"/>
        </div>
        <div class="flex flex-col md:flex-row gap-4 items-start">
            <Browser class="order-2 md:order-1 w-full" url="http://puomerit.herokuapp.com" image="/puomerit.jpeg"/>
            <StackedCards background="bg-secondary" class="order-1 md:order-2" title="Laravel" description="A system for students and teachers in a school to manage summons and payments."/>
        </div>
        <div class="flex flex-col md:flex-row gap-4 items-start">
            <StackedCards background="bg-primary" title="Laravel, Vue, Inertia & Vite" description="An event ticketing management system where users can create events, purchase tickets, and manage their event tickets."/>
            <Browser class="w-full" url="localhost:3000/ticketing-app" image="/ticket.png"/>
        </div>
    </div>
</template>