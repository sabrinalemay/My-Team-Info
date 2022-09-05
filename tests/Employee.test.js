const Employee = require('../lib/Employee');

test('testing to see if we can get employee object', () =>{
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test('testing to see if name comes from constructor', () =>{
    const name = "Sabrina";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test('testing to see if id comes from constructor', () =>{
    const testId = 100;
    const employee = new Employee("foo", testId);
    expect(employee.id).toBe(testId);
});

test('testing to see if email comes from constructor', () =>{
    const testEmail = "test@email.com";
    const employee = new Employee("foo", 1, testEmail);
    expect(employee.email).toBe(testEmail);
});

test("Are we getting name with getName()", () => {
    const name = "Sabrina";
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
});

test("Are we getting id with getId()", () => {
    const testId = 100;
    const employee = new Employee("foo", testId);
    expect(employee.getId()).toBe(testId);
})

test("Are we getting email with getEmail()", () => {
    const testEmail = "test@email.com";
    const employee = new Employee("foo", 1, testEmail);
    expect(employee.getEmail()).toBe(testEmail);
})

test("Does getRole() return Employee", () => {
    const employeeTest = "Employee";
    const employee = new Employee("Sabrina", 1, "test@email.com");
    expect(employee.getRole()).toBe(employeeTest);
});