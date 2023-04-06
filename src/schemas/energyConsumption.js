const joi = require("joi");

const energyConsumptionSchema = joi.object({
    energyConsumption: joi.number().positive().required()
        .messages({
            'any.required': 'O Preenchimento do campo Consumo é obrigatório',
            'number.positive': 'Não e permitido cadastro de consumo com valor negativo',
        })
})

module.exports = { energyConsumptionSchema }