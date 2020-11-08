const Manager = require('../lib/Manager');

test('Create manager object', () => {
    const manager = new Manager('Frank', 1, 'frank@frank.edu');

    expect(manager.name).toBe('Frank');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('frank@frank.edu');
    
})




test('Can set the name from the constructor', () => {
    //arrange
    const name = 'Dave';
    const id = 1;
    const email = 'frank@frank.edu';
    
    //act
    const empObject =  new Manager(name, id, email);
    

    //assert
    expect(empObject.name).toBe('Dave');
}) 

test('Can set the id from the constructor', () => {
    const name = 'Dave';
    const id = 1;
    const email = 'frank@frank.edu';
    const empObject =  new Manager(name, id, email);

    empObject.id = 1;

    expect(empObject.id).toEqual(expect.any(Number));
})

test('Can set the office number from the constructor', () => {
    const name = 'Dave';
    const id = 1;
    const email = 'frank@frank.edu';
    const officeNumber = 1111111111;
    
    //act
    const empObject =  new Manager(name, id, email, officeNumber);
    

    //assert
    expect(empObject.officeNumber).toEqual(expect.any(Number));
})