<template>
    <div class="day">
        <Indicator 
            v-if="haveBirthdayInThisDay" 
            :birthdays="birthdays" 
            @mouseenter="toggleTooltip"
            @mouseleave="toggleTooltip"
        >
            <Tooltip 
                v-if="isHidden" 
                :birthdays="birthdays" 
            />
        </Indicator>
        {{ number }}
    </div>
</template>

<script setup lang="ts">
    import { CustomerName } from '@/types/Customers';
    import { Indicator } from "@/components/Calendar"
    import { Tooltip } from "@/components/Calendar"
    import { computed, ref } from 'vue';

    interface Props {
        birthdays: CustomerName[]
        number: number
    }

    const props = defineProps<Props>()

    const isHidden = ref<boolean>(false)

    const toggleTooltip = (): void => {
        isHidden.value = !isHidden.value
    }

    const haveBirthdayInThisDay = computed(() => {
        return props.birthdays.length > 0
    })
</script>

<style scoped lang="scss">
    .day {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: $fs-16;
        font-weight: bold;
    }
</style>