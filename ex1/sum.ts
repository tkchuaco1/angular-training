export const sumArr = (numbers: number[]): number => {
    return numbers.reduce((total,currVal) => total = total + currVal , 0)
}