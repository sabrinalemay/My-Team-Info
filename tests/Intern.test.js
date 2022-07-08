const Intern = require('./lib/Intern');
const intern = new Intern('sabrina','12345','my@email.com','UCLA');

test('testing to see if we can get intern object', () =>{
    expect(intern.name).toBe('sabrina');
    expect(intern.id).toBe('12345');
    expect(intern.email).toBe('my@email.com');
    expect(intern.school).toBe('UCLA');
});

test('testing to see if name comes from getName()', () =>{
    expect(intern.getName()).toBe('sabrina');
});

test('testing to see if id comes from getId()', () =>{
    expect(intern.getId()).toBe('12345');
});

test('testing to see if email comes from getEmail()', () =>{
    expect(intern.getEmail()).toBe('my@email.com');
});

test('testing to see if school comes from getSchool', () =>{
    expect(intern.getSchool()).toBe('UCLA');
});