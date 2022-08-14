const fs = require('node:fs')
const path = require('node:path')
const uuid = require('uuid')

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
const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
for (var i = 0; i < randomNum(0,100); i++) {
    fs.writeFileSync(`${classes[randomNum(0, classes.length - 1)].short} - ${uuid.v4()}.txt`, "")
}