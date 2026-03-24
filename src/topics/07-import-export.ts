import { Product, taxCalculation } from "./06-functions-destructuring";

const shoppingCart : Product[] = [
    {
        description: 'Nokia',
        price: 200
    },
    {
        description: 'iPad',
        price: 450
    }
]

const result = taxCalculation({tax: 0.15, products: shoppingCart});
console.log(result);