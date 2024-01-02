
export const logMethod = (target: any, propertyKey: string) => {
    console.log(`Method decorator called for method ${propertyKey}.`);
}

export class Test {
    @logMethod
    test(){
        console.log('2')
    }
}