const validationPatterns = {
  name: {
    rule: /^(?=.*[A-Z])[A-Za-z ]{5,}$/,
    message: 'Name must be at least 5 characters long and include at least one uppercase letter'
  },
  description: {
    rule: /^(?=(?:\S+\s+){1,}\S+).{20,}$/,
    message: 'Description must be at least 20 characters long and contain at least two words'
  }
}

type TValidation = typeof validationPatterns[keyof typeof validationPatterns];

const validationFunc = (validation: TValidation) => {
  return (data: string) => {
    const name = data.trim()

    switch (true) {
      case (!name):
        return 'Name is required.'
      case (!validation.rule.test(name)):
        return validation.message
      default:
        return ''
    }
  }
}

const validateName = validationFunc(validationPatterns.name)
const validateDescription = validationFunc(validationPatterns.description)

export { validateName, validateDescription }
