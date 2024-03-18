export interface Calendar {
    [month: string]: {
        days: number[]
    }
}

export interface Month {
    id: number,
    name: string,
    numberMonth: string,
    daysQuantity: number,
    days: { [key: string]: Day[] },
}

export interface Day {
    [date: string]: string
};

export interface BirthdayCustomers  {
    name: string
}