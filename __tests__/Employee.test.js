const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');


test('Create employee object', () => {
    const employee = new Employee('Frank', 1, 'frank@frank.edu');

    expect(employee.name).toBe('Frank');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('frank@frank.edu');
    
})




test('Can set the name from the constructor', () => {
    //arrange
    const name = 'Dave';
    const id = 1;
    const email = 'frank@frank.edu';
    const empObject =  new Employee(name, id, email);
    
    //act
    empObject.name = 'frank';

    //assert
    expect(empObject.name).toBe('frank');
}) 

test('Can set the id from the constructor', () => {
    const name = 'Dave';
    const id = 1;
    const email = 'frank@frank.edu';
    const empObject =  new Employee(name, id, email);

    empObject.id = 1;

    expect(empObject.id).toEqual(expect.any(Number));
})

test('Can set the email from the constructor', () => {
    const name = 'Dave';
    const id = 1;
    const email = 'frank@frank.edu';
    const empObject =  new Employee(name, id, email);

    empObject.email = 'frank@frank.edu';

    expect(empObject.email).toBe('frank@frank.edu');
})