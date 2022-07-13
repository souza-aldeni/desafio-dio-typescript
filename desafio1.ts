//Solucção 1
var employee = {code: 10, name: 'John'};
console.log(employee.code)
console.log(employee.name)

//Solucção 2
var employee : {code: number; name: string};
employee = {code: 10, name: 'John'}
console.log(employee.code)
console.log(employee.name)

//Solucção 3
var employee : {code: number; name: string} = {code: 10, name: 'John'};
console.log(employee.code)
console.log(employee.name)

//Solucção 4
interface Employee {
    code: number;
    name: string;
}
var employee : Employee = {code: 10, name: 'John'};
console.log(employee.code)
console.log(employee.name)

