const { getLogin } = require('../models/login')
const { compareHash, creatHash } = require('../util/cript')

async function logar({ login, password }) {

  try {
    const result = await getLogin(login)

    if (!result) {
      throw new Error('User not found')
    }

    if(!await compareHash(password, result.password)){
      throw new Error('Invalid password')
    }

    return {id: result.id, privilege: result.privilege}

  } catch (error) {
    throw error
  }

}

module.exports = logar
