// template to help make html code that generates team
function templatePage(data) {
    // console.log('DATA', data) to check if things are working
    let htmllist = []
    for(let i = 0; i < data.length; i++){
        console.log(data[i])
        if (data[i].getRole() === "Manager"){
            htmllist.push(`<div class="card employee-card m-2">
            <div class="card-header">
                <h2 class="card-title">${data[i].name}</h2>
                <h3 class="card-title">${data[i].getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${data[i].id}</li>
                    <li class="list-group-item">Email: <a
                            href="mailto:${data[i].email}">${data[i].email}</a></li>
                            <li class="list-group-item">Office Number: ${data[i].getOfficeNumber()}</li>
                </ul>
            </div>
        </div>`)
        } else if  (data[i].getRole() === "Engineer") {
            htmllist.push(`<div class="card employee-card m-2">
                <div class="card-header">
                    <h2 class="card-title">${data[i].name}</h2>
                    <h3 class="card-title">${data[i].getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${data[i].id}</li>
                        <li class="list-group-item">Email: <a
                                href="mailto:${data[i].email}">${data[i].email}</a></li>
                                <li class="list-group-item">GitHub: <a href="https://github.com/${data[i].getGithub()}"
                                    target="_blank" rel="noopener noreferrer">${data[i].getGithub()}</a></li></li>
                    </ul>
                </div>
            </div>`)
        }
        else {
            htmllist.push(`<div class="card employee-card m-2">
            <div class="card-header">
                <h2 class="card-title">${data[i].name}</h2>
                <h3 class="card-title">${data[i].getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${data[i].id}</li>
                    <li class="list-group-item">Email: <a
                            href="mailto:${data[i].email}">${data[i].email}</a></li>
                            <li class="list-group-item">School: ${data[i].getSchool()}</li>
                </ul>
            </div>
        </div>`)
        }
    }
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css" />
    <title>My Team</title>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-5 heading">
                <h1>My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="row team-area col-12 d-flex justify-content-center">
            ${htmllist}
            </div>
        </div>
    </div>
</body>

</html>`;
}

module.exports = templatePage;