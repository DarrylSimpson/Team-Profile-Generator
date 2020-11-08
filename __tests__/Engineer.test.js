const Engineer = require('../lib/Engineer');

test('Create engineer object', () => {
    const engineer = new Engineer('Frank', 1, 'frank@frank.edu');

    expect(engineer.name).toBe('Frank');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('frank@frank.edu');
    
})




test('Can set the name from the constructor', () => {
    //arrange
    const name = 'Dave';
    const id = 1;
    const email = 'frank@frank.edu';
    
    //act
    const empObject =  new Engineer(name, id, email);
    

    //assert
    expect(empObject.name).toBe('Dave');
}) 

test('Can set the id from the constructor', () => {
    const name = 'Dave';
    const id = 1;
    const email = 'frank@frank.edu';
    const empObject =  new Engineer(name, id, email);

    empObject.id = 1;

    expect(empObject.id).toEqual(expect.any(Number));
})

test('Can set the github from the constructor', () => {
    const name = 'Dave';
    const id = 1;
    const email = 'frank@frank.edu';
    const github = 'dj@github.com'
    
    //act
    const empObject =  new Engineer(name, id, email, github);
    

    //assert
    expect(empObject.github).toBe('dj@github.com');
})