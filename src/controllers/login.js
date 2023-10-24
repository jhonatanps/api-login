const { object } = require('yup')
const logar = require('../services/login')

module.exports =  async (req, res) => {
    const { login } = req.params
    const result = await logar(login)
    

}
