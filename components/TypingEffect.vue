<template>
    <div class="title text-primary-content text-2xl md:text-6xl font-black">
        {{ displayText }}
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import anime from 'animejs'

    // Initial and final texts
    const initialText = 'Syahmi'
    const finalText = 'a Full Stack Developer'
    const displayText = ref('') // Empty to start with

    onMounted(() => {
        // Start the animation on mount
        animateTypingSequence()
    })

    function animateTypingSequence() {
        // Step 1: Animate "Syahmi" text
        animateTyping(initialText, () => {
            setTimeout(() => {
                displayText.value = ''
                // Step 3: Animate "Full Stack Developer" text
                animateTyping(finalText, () => {
                    setTimeout(() => {
                        displayText.value = ''
                        // Step 4: Restart the animation sequence for looping
                        animateTypingSequence()
                    }, 1000)
                })
            }, 1000)
        })
    }

    // Function to animate typing effect for a given text
    function animateTyping(text, callback) {
        const chars = text.split('')
        displayText.value = '' // Clear text before starting

        anime({
            targets: chars,
            delay: anime.stagger(150), // Delay between each character
            update: (anim) => {
                const currentChars = chars.slice(0, Math.floor(anim.currentTime / 150))
                displayText.value = currentChars.join('')
            },
            easing: 'linear',
            duration: chars.length * 150,
            complete: callback // Trigger the callback after animation completes
        })
    }   
</script>