const Ajv = require("ajv")
const ajv = new Ajv()
const localize = require("ajv-i18n")

const schema = require('../test/index.json')

const validate = (data) => {
  const validate = ajv.compile(schema)
  const valid = validate(data)
  
  if (!valid) {
    localize.zh(validate.errors)
    console.log(validate)
    console.log(ajv.errorsText(validate.errors, {separator: '\n'}))
  }
  
  return {valid, errors: validate.errors}
}

module.exports = {
  validate
}
