<template>
    <div class="calendar">
        <div class="month" v-for="{ id, name, days } in calendar" :key="id">
            <h3 class="month__name">{{ name }}</h3>
            <div class="month__grid">
                <Day
                    class="day" 
                    v-for="({ birthdays, number }) in days" :key="number"
                    :birthdays="birthdays" :number="number" 
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Month } from '@/types/Calendar';
import { Customer } from '@/types/Customers';
import { Day } from '@/components/Calendar'
import { onMounted, ref } from 'vue';

import useUtils from '@/utils/useUtils'

const { getDay, getMonth } = useUtils()

    const customers: Customer[] = [
        {
            id: 0,
            name: 'Marquinhos',
            birthday: '01/01/2001'
        },
        {
            id: 1,
            name: 'Arrascaeta',
            birthday: '02/01/2003'
        },
        {
            id: 2,
            name: 'Bruno Henrique',
            birthday: '03/01/1995'
        },
        {
            id: 3,
            name: 'Gerson',
            birthday: '05/08/1975'
        },
        {
            id: 4,
            name: 'Everton Ribeiro',
            birthday: '05/08/2000'
        },
        {
            id: 5,
            name: 'Gabriel Barbosa',
            birthday: '05/08/2004'
        },
        {
            id: 6,
            name: 'Pedro',
            birthday: '12/08/2004'
        },
        {
            id: 7,
            name: 'Leo Pereira',
            birthday: '12/08/2004'
        },
        {
            id: 8,
            name: 'Fabricio Bruno',
            birthday: '12/08/2004'
        },
        {
            id: 9,
            name: 'Haaland',
            birthday: '12/08/2004'
        },
        {
            id: 10,
            name: 'Bellingham',
            birthday: '12/08/2004'
        },
        {
            id: 11,
            name: 'João Gomes',
            birthday: '01/01/1988'
        }
    ]

    const calendar = ref<Month[]>([
        {
            id: 0,
            name: 'janeiro',
            number: '01',
            daysQuantity: 31,
            days: {}
        },
        {
            id: 1,
            name: 'fevereiro',
            number: '02',
            daysQuantity: 28,
            days: {}
        },
        {
            id: 2,
            name: 'março',
            number: '03',
            daysQuantity: 31,
            days: {}
        },
        {
            id: 3,
            name: 'abril',
            number: '04',
            daysQuantity: 30,
            days: {}
        },
        {
            id: 4,
            name: 'maio',
            number: '05',
            daysQuantity: 31,
            days: {}
        },
        {
            id: 5,
            name: 'junho',
            number: '06',
            daysQuantity: 30,
            days: {}
        },
        {
            id: 6,
            name: 'julho',
            number: '07',
            daysQuantity: 31,
            days: {}
        },
        {
            id: 7,
            name: 'agosto',
            number: '08',
            daysQuantity: 31,
            days: {}
        },
        {
            id: 8,
            name: 'setembro',
            number: '09',
            daysQuantity: 30,
            days: {}
        },
        {
            id: 9,
            name: 'outubro',
            number: '10',
            daysQuantity: 31,
            days: {}
        },
        {
            id: 10,
            name: 'novembro',
            number: '11',
            daysQuantity: 30,
            days: {}
        },
        {
            id: 11,
            name: 'dezembro',
            number: '12',
            daysQuantity: 31,
            days: {}
        }
    ])


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
        justify-content: center;
        flex-wrap: wrap;
        flex: 1;
        gap: $g-8;
    }

    .month {
        width: 100%;
        max-width: 300px;
        border: 1px solid $gray;
        border-radius: .375rem;
        padding: $p-8;

        &__grid {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
        }
    }
</style>