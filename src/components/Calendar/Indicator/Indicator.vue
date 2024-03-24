<template>
    <div :class="`indicator indicator--${intensity}`"><slot /></div>
</template>

<script setup lang="ts">
    import { CustomerName } from "@/types/Customers";
    import { computed } from "vue"

    interface Props {
        birthdays: CustomerName[]
    }

    const props = defineProps<Props>()

    const intensity = computed(() => {
        return props.birthdays.length
    })
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
        z-index: $layer-1;

        &--1 {
            width: 1rem;
            height: 1rem;
            background-color: $orange-op-02;
        }
        &--2 {
            width: 1.25rem;
            height: 1.25rem;
            background-color: $orange-op-03;
        }
        &--3 {
            width: 1.5rem;
            height: 1.5rem;
            background-color: $orange-op-04;
        }
        &--4 {
            width: 1.75rem;
            height: 1.75rem;
            background-color: $orange-op-05;
        }
        &--5 {
            width: 2rem;
            height: 2rem;
            background-color: $orange-op-06;
        }
    }
</style>