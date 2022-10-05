export const changeDateFormat = (date: Date) => {
    const year = new Date(date).getFullYear()
    const month = new Date(date).getMonth()
    const day = new Date(date).getDate()
    return `${day < 10 ? `0${day}` : day}.${(month + 1) < 10 ? `0${month + 1}` : month + 1}.${year}`
}