const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');


test('Create employee object', () => {
    const employee = new Employee('Frank');

    expect(employee.name).toBe('Frank');
    expect(employee.id).toEqual(expect.any(Number));
    
})
test('Can set the name from the constructor', () => {
    const name = 'Dave';
    const empObject =  new Employee(name);
    expect(empObject.name).toBe(name);
}) 

test('Can set the id from the constructor', () => {

})