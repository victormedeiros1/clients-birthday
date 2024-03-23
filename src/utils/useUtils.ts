export default function useUtils() {
    const getDay = (date: string): string => date.split('/')[0]
    const getMonth = (date: string): string => date.split('/')[1]

    return { getDay, getMonth }
}