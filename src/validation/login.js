const yup = require('yup');


module.exports = async (req, res, next) => {
  const schema = yup.object().shape({
    login: yup.string().required('Erro: favor inserir um login'),
    password: yup.string().required('Erro: favor inserir uma senha'),
  });

  try {
    const data = await schema.validate(req.body);

    next();
  } catch (error) {
      res.status(400).send({ message: error.message });
    return;
  }
};