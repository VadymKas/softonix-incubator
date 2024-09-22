const validationPatterns = {
  name: {
    rule: /^(?=.{5,}$)(?:(?:[A-ZА-ЯЁ][A-Za-zА-Яа-яЁ-ё]*)(?:\s[A-ZА-ЯЁ][A-Za-zА-Яа-яЁ-ё]*)*)$/,
    message: 'Name must be at least 5 characters long and include at least one uppercase letter'
  },
  description: {
    rule: /^(?=.{20,}$)(?:(?:[A-ZА-ЯЁ][A-Za-zА-Яа-яЁ-ё-_]*)(?:\s[A-ZА-ЯЁ][A-Za-zА-Яа-яЁ-ё-_]*)*)$/,
    message: 'Description must be at least 20 characters long and contain at least two words with uppercase letter'
  }
}

type TValidation = typeof validationPatterns[keyof typeof validationPatterns];

const validationFunc = (validation: TValidation) => {
  return (data: string) => {
    const name = data.trim()

    switch (true) {
      case (!name):
        return 'Field is required.'
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
