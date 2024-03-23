import { CustomerName } from "./Customers";

export interface Month {
    id: number;
    name: string;
    number: string;
    daysQuantity: number;
    days: { [date: string]: Day };
}

export interface Day {
    number: number;
    birthdays: CustomerName[];
}