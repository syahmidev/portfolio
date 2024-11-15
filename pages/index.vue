<template>
    <div class="overflow-x-hidden">
        <HeroSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <SocialMediaSection />
    </div>
</template>

<!-- SEO things -->
<script setup>
    useHead({
        title: 'Syahmi - Full Stack Developer',
        meta: [
            { name: 'description', content: 'Ambitious and dedicated Senior Full Stack Web Developer with progressive experience from junior to senior-level roles. Passionate about expanding knowledge in advanced web development, server management, and critical thinking. Eager to achieve expertise in backend server management and lead teams to deliver robust, scalable web solutions.' }
        ],
    })

    useSeoMeta({
        title: 'Syahmi - Full Stack Developer',
        ogTitle: 'Syahmi - Full Stack Developer',
        description: 'Ambitious and dedicated Senior Full Stack Web Developer with progressive experience from junior to senior-level roles. Passionate about expanding knowledge in advanced web development, server management, and critical thinking. Eager to achieve expertise in backend server management and lead teams to deliver robust, scalable web solutions.',
        ogDescription: 'Ambitious and dedicated Senior Full Stack Web Developer with progressive experience from junior to senior-level roles. Passionate about expanding knowledge in advanced web development, server management, and critical thinking. Eager to achieve expertise in backend server management and lead teams to deliver robust, scalable web solutions.',
        ogImage: '/favicon.png',
    })
</script>