
// tính giai thừa
export const calculateFactorial = (n: number): number => {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * calculateFactorial(n - 1);
    }
}

// check số nguyên
export const isInteger = (value: number): boolean => {  
    return Number.isInteger(value);
}