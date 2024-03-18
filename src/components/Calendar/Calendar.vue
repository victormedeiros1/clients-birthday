<template>
    <div class="calendar">
        <div class="month" v-for="month in calendar" :key="month.id">
            <h3 class="month__name">{{ month.name }}</h3>
            <div class="month__grid">
                <span class="month__day" v-for="day, index in month.days" :key="day">
                    {{ index.split('/')[0] }}
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Month } from '@/types/Calendar';
import { onMounted, ref } from 'vue';
    const customers = [
        {
            id: 0,
            name: 'João da Silva',
            birthday: '01/01/2024'
        },
        {
            id: 1,
            name: 'Maria da Silva',
            birthday: '02/01/2024'
        },
        {
            id: 2,
            name: 'José da Silva',
            birthday: '03/01/2024'
        },
        {
            id: 3,
            name: 'José Victor',
            birthday: '05/08/2024'
        },
        {
            id: 3,
            name: 'Luciano Silva',
            birthday: '01/01/2024'
        }
    ]

    const calendar = ref<Month[]>([
        {
            id: 0,
            name: 'janeiro',
            numberMonth: '01',
            daysQuantity: 31,
            days: {}
        },
        {
            id: 1,
            name: 'fevereiro',
            numberMonth: '02',
            daysQuantity: 28,
            days: {}
        },
        {
            id: 2,
            name: 'março',
            numberMonth: '03',
            daysQuantity: 31,
            days: {}
        },
        {
            id: 3,
            name: 'abril',
            numberMonth: '04',
            daysQuantity: 30,
            days: {}
        },
        {
            id: 4,
            name: 'maio',
            numberMonth: '05',
            daysQuantity: 31,
            days: {}
        },
        {
            id: 5,
            name: 'junho',
            numberMonth: '06',
            daysQuantity: 30,
            days: {}
        },
        {
            id: 6,
            name: 'julho',
            numberMonth: '07',
            daysQuantity: 31,
            days: {}
        },
        {
            id: 7,
            name: 'agosto',
            numberMonth: '08',
            daysQuantity: 31,
            days: {}
        },
        {
            id: 8,
            name: 'setembro',
            numberMonth: '09',
            daysQuantity: 30,
            days: {}
        },
        {
            id: 9,
            name: 'outubro',
            numberMonth: '10',
            daysQuantity: 31,
            days: {}
        },
        {
            id: 10,
            name: 'novembro',
            numberMonth: '11',
            daysQuantity: 30,
            days: {}
        },
        {
            id: 11,
            name: 'dezembro',
            numberMonth: '12',
            daysQuantity: 31,
            days: {}
        }
    ])
    
    function mountCalendar() {
        calendar.value.forEach((month: Month) => {
            for (let i = 1; i <= month.daysQuantity; i++) {
                const DD = i < 10 ? `0${i}` : i
                const MM = Number(month.numberMonth) < 10 ? `${month.numberMonth}` : month.numberMonth
                const date = `${DD}/${MM}`
                month.days[date] = []
            }
        })

        fillCalendarWithBirthdays()
    }

    function fillCalendarWithBirthdays () {
        calendar.value.forEach((month: Month) => {
            customers.forEach(({ name, birthday }) => {
                const dayBirthdayCustomer = birthday.split('/')[0]
                const monthBirthdayCustomer = birthday.split('/')[1]

                const keyBirthday = dayBirthdayCustomer + '/' + monthBirthdayCustomer

                if (month.numberMonth === monthBirthdayCustomer) {
                    month.days[keyBirthday].push({ name });
                }
            })
        })
    }

    onMounted(() => {
        mountCalendar()
    })
</script>

<style scoped lang="scss">
    .calendar {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: $g-8;
    }

    .month {
        border: 1px solid $gray;
        border-radius: .375rem;
        padding: $p-8;

        &__grid {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
        }
    }

    .one {
        background-color: rgb(255, 0, 0, 0.1);
    }

    .two {
        background-color: rgb(255, 255, 0, 0.1);
    }
</style>