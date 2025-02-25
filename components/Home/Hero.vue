<script setup>
const typeValue = ref("")
const typeStatus = ref(false)
const displayTextArray = ["Frontend","Backend","Flutter","Vue", "Angular", "Laravel", "Node.js"]
const typingSpeed = 100
const erasingSpeed = 100
const newTextDelay = 2000
const displayTextArrayIndex = ref(0)
const charIndex = ref(0)
function typeText() {
    if (charIndex.value < displayTextArray[displayTextArrayIndex.value].length) {
        if (!typeStatus) typeStatus = true;
        typeValue.value += displayTextArray[displayTextArrayIndex.value].charAt(
            charIndex.value
        );
        charIndex.value += 1;
        setTimeout(typeText, typingSpeed);
    } else {
        typeStatus.value = false;
        setTimeout(eraseText, newTextDelay);
    }
}
function eraseText() {
    if (charIndex.value > 0) {
        if (!typeStatus) typeStatus.value = true;
        typeValue.value = displayTextArray[displayTextArrayIndex.value].substring(
            0,
            charIndex.value - 1
        );
        charIndex.value -= 1;
        setTimeout(eraseText, erasingSpeed);
    } else {
        typeStatus.value = false;
        displayTextArrayIndex.value += 1;
        if (displayTextArrayIndex.value >= displayTextArray.length)
            displayTextArrayIndex.value = 0;
        setTimeout(typeText, typingSpeed + 1000);
    }
}
onMounted(() =>
    setTimeout(typeText(), newTextDelay + 200)
)
</script>

<template>
    <div class="text-4xl md:text-5xl font-medium noover h-screen  flex items-center relative hero px-5 md:px-0">
        <div class="container md:flex  items-center m-auto">
            <div class="md:w-1/2 z-10 relative ">
                <div class="flex"> <span>I'm</span>, <h2 class="colors">&nbsp;Cristhian Sanchez</h2>
                </div>
                <div class="flex">
                    <span>
                        {{ typeValue }}
                    </span>
                    <span class="blinking-cursor">&nbsp;</span>
                    <div class="typed-text ml-1">Developer</div>
                </div>
                <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
                <h1 class="text-base">Freelance Vue.js developer.</h1>
                <p class="hero__text text-base font-b">
                    As a skilled developer with 5 years of experience, I am proficient in both frontend and backend development. In my free time, I also have experience as a mobile developer. I am always eager to learn and take on new challenges in the tech industry.
                </p>
            </div>
            <div class=" md:w-1/2 z-10 relative flex justify-center items-center mt-20 md0mt-0">
                <img src="/difusal.png" alt="Cristhian Sanchez Medina a.k.a Difusal">
            </div>
            <div class="absolute img-back">
                <img src="https://nuxt.com/assets/home/hero-gradient-tablet.svg" alt="">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
span,
.typed-text {
    color: #FFFFFF !important;
}

.img-back {
    top: 0px;
    right: 0px;
    z-index: 0;
    width: 100vw;
    height: 100vh;
    background-repeat: repeat;
}

.img-back img {
    width: 100vw;
}

.noover>.fp-overflow {
    overflow: hidden;
}

.fp-overflow::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
}

.colors {
    background-color: #FFFFFF;
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    background-image: linear-gradient(45deg, #36e4da, #00dc82);
    @media(max-width:750px){
        font-size: 30px;
    }
}

.blinking-cursor {
    font-size: 50px;
    width: 4px;
    height: 100%;
    border-radius: 10px;
    background: #00dc82;
    color: transparent;
    border-radius: 10px;
    -webkit-animation: 1s blink step-end infinite;
    -moz-animation: 1s blink step-end infinite;
    -ms-animation: 1s blink step-end infinite;
    -o-animation: 1s blink step-end infinite;
    animation: 1s blink step-end infinite;
}

@keyframes blink {

    from,
    to {
        color: transparent;
        background: transparent;
    }

    50% {
        background: #36e4da;

    }
}

@-moz-keyframes blink {

    from,
    to {
        color: transparent;
    }

    50% {
        color: #2c3e50;
    }
}

@-webkit-keyframes blink {

    from,
    to {
        color: transparent;
    }

    50% {
        color: #2c3e50;
    }
}

@-ms-keyframes blink {

    from,
    to {
        color: transparent;
    }

    50% {
        color: #2c3e50;
    }
}

@-o-keyframes blink {

    from,
    to {
        color: transparent;
    }

    50% {
        color: #2c3e50;
    }
}
</style>