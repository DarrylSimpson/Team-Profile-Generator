const Intern = require('../lib/Intern');

test('Can set the name from the constructor', () => {
    const name = 'Dave';
    const empObject =  new Intern(name);
    expect(empObject.name).toBe(name);
}) 