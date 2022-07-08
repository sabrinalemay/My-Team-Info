const generateTeam = team => {
    // return `${team[0].email}`
let finalString= "";

    const createManager = manager => {
        finalString += `
    <div class="manager">
        <h2 class="title">${manager.getRole()}</h2>
        <h2 class="name">${manager.name}</h2>
        <h2 class="id">${manager.id}</h2>
        <h2 class="email>${manager.id}</h2>
    </div>
    `
    }
    const createEngineer = engineer => {
        finalString += `
        <div class="engineer">
            <h2 class="title">${engineer.getRole()}</h2>
        </div>
        `
    }
    const createIntern = intern => {
        finalString += `
        <div class="intern">
            <h2 class="title">${intern.getRole()}</h2>
        </div>
        `
    }
    for (let i = 0; i < team.length; i++){
        if (team[i].getRole()=== "Manager"){
            createManager(team[i])
        } else if (team[i].getRole()=== "Intern"){
            createIntern(team[i])
        } else if (team[i].getRole()=== "Engineer"){
            createEngineer(team[i])
        }
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
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};