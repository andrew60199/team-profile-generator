

const generateHtml = object => {

    // Place the object of cards into the HTML file
    // Write to file 

    // console.log(object.html)

    return `
    <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
        <link href="./css/style.css" type="text/css" rel="stylesheet">
        <title>Team Information</title>
    </head>
    <body>
        <header>
            <h1>Team Information</h1>
        </header>
        <main>
            <section>
                    ${object.html}
            </section>
        </main>
    </body>
</html>
    `

}

module.exports = generateHtml