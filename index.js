const fs = require('node:fs')
const al = require('@dumpy/andylib')
const logger = new al.logger()
const path = require('path')
// import readline
const readline = require('node:readline')
const { exit } = require('node:process')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const classes = [
    {
        name: "Math",
        short: "MAT"
    },
    {
        name: "Science",
        short: "SCI"
    },
    {
        name: "English",
        short: "ENG"
    },
    {
        name: "Agriculture",
        short: "AGR"
    },
    {
        name: "Geography",
        short: "GEO"
    }
]
rl.question('Prefolder (leave empty for none):', (prefolder) => {

    const sort = (filename, destination, prefolder = "") => {
        if (prefolder.length > 0) {
            if (!fs.existsSync(path.join(prefolder, destination))) {
                fs.mkdir(path.join(prefolder, destination), { recursive: true }, (err) => {
                    if (err) {fs.mkdir(path.join(prefolder, destination), { recursive: true }, (err) => {
                    
                    })}
                })
            }
            fs.rename(filename, path.join(prefolder, destination, filename), (err) => {
                if (err) throw err
            })
        } else {
            if (!fs.existsSync(path.join(destination))) {
                fs.mkdir(path.join(destination), { recursive: true }, (err) => {
                    if (err) {
                        fs.mkdir(path.join(destination), { recursive: true }, (err) => {
                    
                        })
                    }
                })
            }
            fs.rename(filename, path.join(destination, filename), (err) => {
                if (err) throw err
            })
        }


    }
    let filesfound = 0;
    const files = fs.readdirSync('./')
    for (let file of files) {
        for (var i = 0; i < classes.length; i++) {
            if (file.startsWith(classes[i].short)) {
                logger.info(`Found ${file}`)
                filesfound++
            }

        }
    }
    if (filesfound == 0) {
        logger.error(`No files found`)
        exit(0)
    }

    logger.info(`Sorting files!`)
    for (let file of files) {
        for (var i = 0; i < classes.length; i++) {
            if (file.startsWith(classes[i].short)) {
                if (prefolder) {
                    sort(file, classes[i].name, prefolder)
                } else {
                    sort(file, classes[i].name)
                }
            }
        }
    }
    logger.info(`Done!`)


})