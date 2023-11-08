const bcrypt = require('bcrypt')

async function creatHash(password){

    return await bcrypt.hash(password, 10)
}

async function compareHash(password, dbPassword){
    return await bcrypt.compare(password, dbPassword)
}

module.exports = {creatHash, compareHash}
