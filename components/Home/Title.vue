<template>
    <div class="py-20 text-center text-4xl font-medium px-3 md:px-0">
        <h2>
            {{ props.title }}
        </h2>
    </div>
</template>

<script lang="ts" setup>
    const props = defineProps<{title:String}>()
</script>

<style lang="scss" scoped>

</style>