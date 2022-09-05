const Manager = require('../lib/Manager');

test('testing to see if we can get office number with constructor', () => {
    const numberTest = 100;
    const manager = new Manager("foo", 1, "test@email.com", numberTest);
    expect(manager.officeNumber).toBe(numberTest);
});

test('Does getRole() return Manager', () => {
    const managerTest = "Manager";
    const manager = new Manager("foo", 1, "test@email.com", 100);
    expect(manager.getRole()).toBe(managerTest);
});

test('Does getOfficeNumber()', () => {
    const numberTest = 100;
    const manager = new Manager("foo", 1, "test@email.com", numberTest);
    expect(manager.getOfficeNumber()).toBe(numberTest);
});

