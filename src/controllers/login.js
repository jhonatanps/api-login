// const { object } = require('yup')
const logar = require('../services/login')

module.exports = async (req, res) => {
    try {
        const result = await logar(req.body)
        res.json(result)
    } catch (error) {
        if (error.message === 'User not found') {
            res.status(404).json({ error: error.message })
        } else if (error.message === 'Invalid password') {
            res.status(401).json({ error: error.message })
        } else {
            res.status(500).json({ error: error.message })
        }
    }

}
