const { default: test } = require('node:test');
const Manager = require('./lib/Manager');
const manager = new Manager('sabrina','12345','my@email.com','1200');

test('testing to see if we can get manager object', () =>{
    expect(manager.name).toBe('sabrina');
    expect(manager.id).toBe('12345');
    expect(manager.email).toBe('my@email.com');
    expect(manager.getOfficeNumber).toBe('1200');
});

test('testing to see if name comes from getName()', () =>{
    expect(manager.getName()).toBe('sabrina');
});

test('testing to see if id comes from getId()', () =>{
    expect(manager.getId()).toBe('12345');
});

test('testing to see if email comes from getEmail()', () =>{
    expect(manager.getEmail()).toBe('my@email.com');
});

test('testing to see if office number comes from getOfficeNumber()', () =>{
    expect(manager.getOfficeNumber()).toBe('1200');
});

test('testing to see if role comes from getRole()', () =>{
    expect(manager.getRole()).toBe('Manager');
});