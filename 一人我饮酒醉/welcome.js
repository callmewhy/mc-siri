const fs = require('fs')
const spawnSync = require('child_process').spawnSync
const lyric = fs.readFileSync('./welcome.txt').toString()

function padLeft(text, char, number) {
    var result = '' + text
    while (result.length < number) {
        result = char + result
    }
    return result
}

const words = {}

lyric.split('\n')
    .filter(line => line.length > 0)
    .map((line, lineN) => {
        const filename = padLeft(lineN, '0', 3) + '-' + line + '.aiff'
        spawnSync('say', [line, '-o', './welcome/' + filename])
    })