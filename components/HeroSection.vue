<template>
    <div class="h-screen w-screen flex flex-col md:flex-row gap-0">
        <div class="w-full md:w-[35%] h-full bg-base-200 grid place-content-center text-3xl md:text-6xl font-black">
            Hi, I'm
        </div>
        <div class="relative w-full md:w-[65%] h-full bg-primary grid place-content-center">
            <TypingEffect />
            <div class="absolute top-[-25%] md:top-[unset] md:bottom-4 chat chat-start animate__animated animate__jackInTheBox">
                <div class="chat-header text-white md:text-primary-content">
                    Me
                    <time class="text-xs opacity-50 text-white md:text-primary-content">1 seconds ago</time>
                </div>
                <div class="chat-bubble bg-secondary text-primary-content text-xs md:text-base">
                    Ambitious and dedicated Senior Full Stack Web Developer with progressive experience from junior
                    to senior-level roles. Passionate about expanding knowledge in advanced web development, server
                    management, and critical thinking. Eager to achieve expertise in backend server management and
                    lead teams to deliver robust, scalable web solutions.
                </div>
                <div class="chat-footer opacity-50 text-white md:text-primary-content">Delivered</div>
            </div>
        </div>
    </div>
</template>