const Employee = require('../lib/Employee');

test('Can set the name from the constructor', () => {
    const name = 'Dave';
    const empObject =  new Employee(name);
    expect(empObject.name).toBe(name);
}) 