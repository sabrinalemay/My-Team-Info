const generateTeam = team => {

let finalString= "";

    const createManager = manager => {
        finalString += `
    <div class="manager-card" style="width: 18rem;">
        <div class="card-header"> 
        <h2 class="titleManager">${manager.getRole()}</h2>
        ${manager.name} <br/>
        <div class="fas fa-mug-hot"></i>Manager</div>
        <ul class ="list-group list-group-flush">
            <li class="list-group-item">${manager.id}</li>
            <li class="list-group-item"> <span id="email"> <a href="mailto: ${manager.email}">${manager.email}</a></span></li>
            <li class="list-group-item">${manager.officeNumber}</li>
        </ul>
    </div>
    `
    }
    const createEngineer = engineer => {
        finalString += `
        <div class="manager-card" style="width: 18rem;">
        <div class="card-header"> 
        <h2 class="titleManager">${engineer.getRole()}</h2> Name
        ${engineer.name} <br/>
        <div class="fas fa-mug-hot"></i>Manager</div>
        <ul class ="list-group list-group-flush">
            <li class="list-group-item">ID ${engineer.id}</li>
            <li class="list-group-item"> <span id="email"> <a href="mailto: ${engineer.email}"> Email ${engineer.email}</a></span></li>
            <li class="list-group-item"> <a target="_blank" href="https://github.com/${engineer.github}"> GitHub ${engineer.github}</a></li>
        </ul>
    </div>
        `
    }
    const createIntern = intern => {
        finalString += `
        <div class="manager-card" style="width: 18rem;">
        <div class="card-header"> 
        <h2 class="titleManager">${intern.getRole()}</h2> Name
        ${intern.name} <br/>
        <div class="fas fa-mug-hot"></i>Manager</div>
        <ul class ="list-group list-group-flush">
            <li class="list-group-item"> ID ${intern.id}</li>
            <li class="list-group-item"> <span id="email"> <a href="mailto: ${intern.email}"> Email ${intern.email}</a></span></li>
            <li class="list-group-item"> School ${intern.school}</li>
        </ul>
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