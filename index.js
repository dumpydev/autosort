const fs = require('node:fs')
const al = require('@dumpy/andylib')
const logger = new al.logger()
const path = require('path')
require('colors')
var figlet = require('figlet');
const version = require('./package.json').version
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
    },
    {
        name: "History",
        short: "HIS"
    },
    {
        name: "Music",
        short: "MUS"
    },
    {
        name: "Art",
        short: "ART"
    },
    {
        name: "Physical Education",
        short: "PE"
    },
]
figlet('AutoSort', function(err, data) {
    console.log(data.rainbow)
    console.log(`Version: v${version}`.green)
    rl.question('Prefolder (leave empty for none):', (prefolder) => {

        const sort = (filename, destination, prefolder = "") => {
            if (prefolder.length > 0) {
                if (!fs.existsSync(path.join(prefolder, destination))) {
                    fs.mkdirSync(path.join(prefolder, destination), { recursive: true })
                }
                fs.renameSync(filename, path.join(prefolder, destination, filename))
            } else {
                if (!fs.existsSync(path.join(destination))) {
                    fs.mkdirSync(path.join(destination), { recursive: true })
                }
                fs.renameSync(filename, path.join(destination, filename))
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
        if (filesfound === 0) {
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
});
