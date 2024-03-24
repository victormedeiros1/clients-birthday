<template>
    <div class="tooltip">
        <ul class="tooltip__list">
            <li class="tooltip__item" 
                v-for="{ name } in birthdays" :key="name">
                {{ name }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
    import { CustomerName } from '@/types/Customers';

    interface Props {
        birthdays: CustomerName[]
    }

    defineProps<Props>()
</script>

<style scoped lang="scss">
    .tooltip {
        position: absolute;
        bottom: 100%;
        left: 0;
        background-color: $orange-op-06;
        backdrop-filter: blur(4px);
        border-radius: 0.5rem;
        width: fit-content;
        display: block;
        z-index: $layer-tooltip;
        padding: $p-8;

        &__item {
            white-space: nowrap;
            color: $dark;
            padding: $p-4;
        }
    }
</style>