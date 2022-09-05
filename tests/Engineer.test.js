const Engineer = require('./lib/Engineer');

test('testing to see if github account comes from constructor', () =>{
    const githubTest = "GitHubName";
    const engineer = new Engineer("foo", 1, "test@email.com", githubTest);
    expect(engineer.github).toBe(githubTest);
});


test('Does getRole() return Engineer', () =>{
    const engineerTest = "Engineer";
    const engineer = new Engineer("foo", 1, "test@email.com", "GitHubName");
    expect(engineer.getRole()).toBe(engineerTest);
});

test('Does getGithub() return GitHub username', () =>{
    const githubTest = "GitHubName";
    const engineer = new Engineer("foo", 1, "test@email.com", githubTest);
    expect(engineer.getGithub()).toBe(githubTest);
});
