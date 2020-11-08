const Manager = require('../lib/Manager');

test('Can set the name from the constructor', () => {
    const name = 'Dave';
    const empObject =  new Manager(name);
    expect(empObject.name).toBe(name);
}) 