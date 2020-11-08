const Intern = require('../lib/Intern');

test('Create intern object', () => {
    const intern = new Intern('Frank', 1, 'frank@frank.edu');

    expect(intern.name).toBe('Frank');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('frank@frank.edu');
    
})




test('Can set the name from the constructor', () => {
    //arrange
    const name = 'Dave';
    const id = 1;
    const email = 'frank@frank.edu';
    
    //act
    const empObject =  new Intern(name, id, email);
    

    //assert
    expect(empObject.name).toBe('Dave');
}) 

test('Can set the id from the constructor', () => {
    const name = 'Dave';
    const id = 1;
    const email = 'frank@frank.edu';
    const empObject =  new Intern(name, id, email);

    empObject.id = 1;

    expect(empObject.id).toEqual(expect.any(Number));
})

test('Can set the school from the constructor', () => {
    const name = 'Dave';
    const id = 1;
    const email = 'frank@frank.edu';
    const school = 'wisconsin'
    
    //act
    const empObject =  new Intern(name, id, email, school);
    

    //assert
    expect(empObject.school).toBe('wisconsin');
})