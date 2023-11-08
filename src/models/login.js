const pg = require('../bd/pg/conn')

async function getLogin(login) {
    try {
        const result = await pg.query('SELECT * FROM apilogin.users where login = $1', [login])
        return result.rows[0]
    } catch (err) {
        throw err;
    }
    // return await pg.query('SELECT * FROM apilogin.users where login = $1', [login])
}

module.exports = { getLogin }