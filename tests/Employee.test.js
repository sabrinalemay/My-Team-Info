const Employee = require('./lib/Employee');
const employee = new Employee('sabrina','12345','my@email.com');

test('testing to see if we can get employee object', () =>{
    expect(employee.name).toBe('sabrina');
    expect(employee.id).toBe('12345');
    expect(employee.email).toBe('my@email.com');
});

test('testing to see if name comes from getName()', () =>{
    expect(employee.getName()).toBe('sabrina');
});

test('testing to see if id comes from getId()', () =>{
    expect(employee.getId()).toBe('12345');
});

test('testing to see if email comes from getEmail()', () =>{
    expect(employee.getEmail()).toBe('my@email.com');
});