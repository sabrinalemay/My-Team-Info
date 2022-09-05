const generateTeam = team => {
    // return `${team[0].email}`
let finalString= "";

    const createManager = manager => {
        finalString += `
    <div class="manager">
        <h2 class="titleManager">${manager.getRole()}</h2>
        <h2 class="nameManager">${manager.name}</h2>
        <h2 class="idManager">${manager.id}</h2>
        <h2 class="emailManager">${manager.email}</h2>
        <h2 class="officeNumber">${manager.officeNumber}</h2>
    </div>
    `
    }
    const createEngineer = engineer => {
        finalString += `
        <div class="engineer">
            <h2 class="titleEngineer">${engineer.getRole()}</h2>
            <h2 class="nameEngineer">${engineer.name}</h2>
            <h2 class="idEngineer">${engineer.id}</h2>
            <h2 class="emailEngineer">${engineer.email}</h2>
            <h2 class="github">${engineer.github}</h2>
        </div>
        `
    }
    const createIntern = intern => {
        finalString += `
        <div class="intern">
            <h2 class="titleIntern">${intern.getRole()}</h2>
            <h2 class="nameIntern">${intern.name}</h2>
            <h2 class="idIntern">${intern.id}</h2>
            <h2 class="emailIntern">${intern.email}</h2>
            <h2 class="school">${intern.school}</h2>
        </div>
        `
    }
    for (let i = 0; i < team.length; i++){
        if (team[i].getRole()=== "manager"){
            createManager(team[i])
        } else if(team[i].getRole()=== "intern"){
            createIntern(team[i])
        } else (team[i].getRole()=== "engineer")
            createEngineer(team[i])
        
    }
    return finalString
}

module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="container">
            <div class="row">
                
                    ${generateTeam(team)}
                
            </div>
        </div>
    </div>
</body>
</html>
    `;
};