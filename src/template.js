// template to help make html code that generates team
function templatePage(data) {
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
                <div class="card employee-card m-2">
                    <div class="card-header">
                        <h2 class="card-title">${data.name}</h2>
                        <h3 class="card-title">${data.role}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${data.id}</li>
                            <li class="list-group-item">Email: <a
                                    href="mailto:${data.email}">${data.email}</a></li>
                            <li class="list-group-item">Office Number: ${data.officeNumber}</li>
                        </ul>
                    </div>
                </div>

                <div class="card employee-card m-2">
                    <div class="card-header">
                        <h2 class="card-title">${data.name}</h2>
                        <h3 class="card-title">${data.role}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${data.id}</li>
                            <li class="list-group-item">Email: <a
                                    href="mailto:${data.email}">${data.email}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${data.github}"
                                    target="_blank" rel="noopener noreferrer">andreahergert</a></li>
                        </ul>
                    </div>
                </div>

                <div class="card employee-card m-2">
                    <div class="card-header">
                        <h2 class="card-title">${data.name}</h2>
                        <h3 class="card-title">${data.role}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${data.id}</li>
                            <li class="list-group-item">Email: <a
                                    href="mailto:${data.email}">${data.email}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${data.github}"
                                    target="_blank" rel="noopener noreferrer">andreahergert</a></li>
                        </ul>
                    </div>
                </div>

                <div class="card employee-card m-2">
                    <div class="card-header">
                        <h2 class="card-title">${data.name}</h2>
                        <h3 class="card-title">${data.role}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${data.id}</li>
                            <li class="list-group-item">Email: <a
                                    href="mailto:${data.email}">${data.email}</a></li>
                            <li class="list-group-item">School: ${data.school}</li>
                        </ul>
                    </div>
                </div>

                <div class="card employee-card m-2">
                    <div class="card-header">
                        <h2 class="card-title">${data.name}</h2>
                        <h3 class="card-title">${data.role}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${data.id}</li>
                            <li class="list-group-item">Email: <a
                                    href="mailto:${data.email}">${data.email}</a></li>
                            <li class="list-group-item">School: ${data.school}</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>
</body>

</html>`;
}

module.exports = templatePage;