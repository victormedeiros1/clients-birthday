<template>
    <div class="calendar">
        <div class="calendar__header">
            <div class="today">
                <h1>Hoje é dia {{ today }}</h1>

                <div class="today__birthdays">
                    <h3 v-if="getBirthdays.length === 0">Não há aniversariantes</h3>
                    <div v-else>
                        <h3>Aniversariantes de hoje:</h3>
                        <ul v-for=" birthday in getBirthdays" :key="birthday.id">
                            <li>
                                <h3>{{ birthday.name }}</h3>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="calendar__body">
            <div class="month" v-for="{ id, name, days } in calendar" :key="id">
                <div class="month__header">
                    <h3 class="month__name">{{ name }}</h3>
                </div>
                <div class="month__body">
                    <div class="month__grid">
                        <Day
                            v-for="({ birthdays, number }) in days" :key="number"
                            :birthdays="birthdays" 
                            :number="number" 
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Month } from '@/types/Calendar';
import { Customer } from '@/types/Customers';
import { Day } from '@/components/Calendar'
import { customers } from "@/mocks"
import { computed, onMounted, ref } from 'vue';

import useUtils from '@/utils/useUtils'

const { getDay, getMonth } = useUtils()

    const today = new Date().toLocaleDateString()

    const calendar = ref<Month[]>([
        {
            id: 0,
            name: 'JANEIRO',
            number: '01',
            daysQuantity: 31,
            days: {}
        },
        {
            id: 1,
            name: 'FEVEREIRO',
            number: '02',
            daysQuantity: 28,
            days: {}
        },
        {
            id: 2,
            name: 'MARÇO',
            number: '03',
            daysQuantity: 31,
            days: {}
        },
        {
            id: 3,
            name: 'ABRIL',
            number: '04',
            daysQuantity: 30,
            days: {}
        },
        {
            id: 4,
            name: 'MAIO',
            number: '05',
            daysQuantity: 31,
            days: {}
        },
        {
            id: 5,
            name: 'JUNHO',
            number: '06',
            daysQuantity: 30,
            days: {}
        },
        {
            id: 6,
            name: 'JULHO',
            number: '07',
            daysQuantity: 31,
            days: {}
        },
        {
            id: 7,
            name: 'AGOSTO',
            number: '08',
            daysQuantity: 31,
            days: {}
        },
        {
            id: 8,
            name: 'SETEMBRO',
            number: '09',
            daysQuantity: 30,
            days: {}
        },
        {
            id: 9,
            name: 'OUTUBRO',
            number: '10',
            daysQuantity: 31,
            days: {}
        },
        {
            id: 10,
            name: 'NOVEMBRO',
            number: '11',
            daysQuantity: 30,
            days: {}
        },
        {
            id: 11,
            name: 'DEZEMBRO',
            number: '12',
            daysQuantity: 31,
            days: {}
        }
    ])

    const getBirthdays = computed(() => {
        const todayDayAndMonth = getDay(today) + '/' + getMonth(today)
        const birthdaysToday = customers.filter(({ birthday }) => {
            const customerDayAndMonth = 
                getDay(birthday) + '/' + getMonth(birthday)

            return todayDayAndMonth === customerDayAndMonth
        })

        return birthdaysToday
    })

    function fillCalendarWithBirthdays (month: Month, customers: Customer[]) {
        // TODO
        // Gerar um novo estado para os calendários ao invés de dar o push no array
        customers.forEach(({ name, birthday }) => {
            const dayCustomer = getDay(birthday)
            const monthCustomer = getMonth(birthday)

            const keyBirthday = dayCustomer + '/' + monthCustomer
            
            if (month.number === monthCustomer) {
                month.days[keyBirthday].birthdays.push({ name })
            }
        })
    }

    function assembleCalendarStructure() {
        const fillCalendarWithDays = (calendar: Month[]): void => {
            // TODO
            // Gerar um novo estado para os calendários ao invés de modificá-lo diretamente
            calendar.forEach((month: Month) => {
                for (let i = 1; i <= month.daysQuantity; i++) {
                    const DD = i < 10 ? `0${i}` : i
                    const MM = Number(month.number) < 10 ? `${month.number}` : month.number
                    const date = `${DD}/${MM}`
                    
                    month.days[date] = {
                        number: i,
                        birthdays: []
                    }
                }

                fillCalendarWithBirthdays(month, customers)
            })
        }

        fillCalendarWithDays(calendar.value)
    }

    onMounted(() => {
        assembleCalendarStructure()
    })
</script>

<style scoped lang="scss">
    .calendar {
        display: flex;
        flex-direction: column;
        gap: $g-32;

        &__header {
            background-color: $orange;
            color: $light;
            text-align: center;
            border: 1px solid $gray;
            border-radius: .375rem;
            padding: $p-32;
        }

        &__body {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            flex: 1;
            gap: $g-8;

            .month {
                width: 100%;
                max-width: 300px;
                border: 1px solid $gray;
                border-radius: .375rem;

                &__header {
                    background-color: $orange;
                    color: $light;
                    border-top-left-radius: .375rem;
                    border-top-right-radius: .375rem;
                    padding: $p-8;
                }

                &__grid {
                    display: grid;
                    grid-template-columns: repeat(7, 1fr);
                }
            }
        }
    }
</style>