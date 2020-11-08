const Engineer = require('../lib/Engineer');

test('Can set the name from the constructor', () => {
    const name = 'Dave';
    const empObject =  new Engineer(name);
    expect(empObject.name).toBe(name);
}) 