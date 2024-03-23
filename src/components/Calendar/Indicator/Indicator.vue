<template>
    <span :class="`indicator indicator--${intensity}`"></span>
</template>

<script setup lang="ts">
    interface Props {
        intensity: number
    }

    defineProps<Props>()
</script>

<style scoped lang="scss">
    .indicator {
        position: absolute;
        display: block;
        width: .25rem;
        height: .25rem;
        border-radius: 50%;
        background-color: $blue;
        opacity: 1;

        &--1 {
            width: 1rem;
            height: 1rem;
            opacity: 0.3;
        }
        &--2 {
            width: 1.25rem;
            height: 1.25rem;
            opacity: 0.35;
        }
        &--2 {
            width: 1.5rem;
            height: 1.5rem;
            opacity: 0.4;
        }
        &--3 {
            width: 1.75rem;
            height: 1.75rem;
            opacity: 0.45;
        }
        &--3 {
            width: 2rem;
            height: 2rem;
            opacity: 0.5;
        }
        &--4 {
            width: 2.25rem;
            height: 2.25rem;
            opacity: 0.55;
        }
        &--4 {
            width: 2.5rem;
            height: 2.5rem;
            opacity: 0.6;
        }
    }
</style>