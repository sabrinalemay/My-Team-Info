const Intern = require('../lib/Intern');

test('testing to see if we can get school with constructor', () =>{
    const schoolTest = "UCLA";
    const intern = new Intern("foo", 1, "test@email.com", schoolTest);
    expect(intern.school).toBe(schoolTest);
});

test('Does getRole() return Intern', () =>{
    const internTest = "Intern";
    const intern = new Intern("foo", 1, "test@email.com", "UCLA");
    expect(intern.getRole()).toBe(internTest);
});

test('Does getSchool() return school', () =>{
    const schoolTest = "UCLA";
    const intern = new Intern("foo", 1, "test@email.com", schoolTest);
    expect(intern.getSchool()).toBe(schoolTest);
});
