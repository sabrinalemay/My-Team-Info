const Engineer = require('./lib/Engineer');
const engineer = new Engineer('sabrina','12345','my@email.com','myGithub');

test('testing to see if we can get engineer object', () =>{
    expect(engineer.name).toBe('sabrina');
    expect(engineer.id).toBe('12345');
    expect(engineer.email).toBe('my@email.com');
    expect(engineer.school).toBe('myGithub');
});

test('testing to see if name comes from getName()', () =>{
    expect(engineer.getName()).toBe('sabrina');
});

test('testing to see if id comes from getId()', () =>{
    expect(engineer.getId()).toBe('12345');
});

test('testing to see if email comes from getEmail()', () =>{
    expect(engineer.getEmail()).toBe('my@email.com');
});

test('testing to see if github comes from getGithub', () =>{
    expect(engineer.getSchool()).toBe('myGithub');
});