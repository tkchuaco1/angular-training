export interface IPerson {
    name: string,
    age: number,
    email: string
}

export const person = (person: IPerson): IPerson => {
    return person
}