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
        background-color: $orange-op-05;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 25%);
        opacity: 1;
        z-index: $layer-1;

        &--1 {
            width: 1rem;
            height: 1rem;
        }
        &--2 {
            width: 1.25rem;
            height: 1.25rem;
        }
        &--3 {
            width: 1.5rem;
            height: 1.5rem;
        }
        &--4 {
            width: 1.75rem;
            height: 1.75rem;
        }
        &--5 {
            width: 2rem;
            height: 2rem;
        }
        &--6 {
            width: 2.25rem;
            height: 2.25rem;
        }
        &--7 {
            width: 2.5rem;
            height: 2.5rem;
        }
    }
</style>