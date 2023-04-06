const validateBodyReq = (joiSchema) => async (req, res, next) => {
    try {
        console.log(req.body)
        await joiSchema.validateAsync(req.body)
        next()
    } catch (error) {
        return res.status(400).json({ mensagem: error.message })
    }
}

module.exports = validateBodyReq 