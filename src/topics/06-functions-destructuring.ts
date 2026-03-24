export interface Product {
    description:string;
    price:number;
}

const phone : Product = {
    description: 'Nokia A1',
    price: 150
}

const tablet : Product = {
    description: 'iPad',
    price: 450
}

interface TaxCalculationOptions {
    tax:number;
    products:Product[];
}

export function taxCalculation({tax, products}:TaxCalculationOptions) : number[] {
    let total = 0;
    products.forEach( product => total += product.price);
    return [total, total*tax];
}


const shoppingCart = [phone, tablet];
const tax = 0.15;

const result = taxCalculation({tax, products: shoppingCart});

const [total, finalTax] = result;
console.log({total, finalTax});