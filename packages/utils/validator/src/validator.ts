export class ValidationError {
  constructor(private readonly errorMessage: string) {}

  get message() {
    return this.errorMessage
  }
}

const isValidationError = value => value instanceof ValidationError

const compose = (...fns) => value =>
  fns.reduce((acc, fn) => {
    acc = fn(acc)
    return acc
  }, value)

export const valueFormatting = value => {
  if (isValidationError(value)) {
    return value.message
  }
  return undefined
}

export const required = value => {
  if (isValidationError(value)) {
    return value
  }
  return value ? value : new ValidationError('Required')
}

export const minValue = min => value => {

  if (isValidationError(value)) {
    return value
  }

  const { length } = value.split('')
  return length < min ? new ValidationError(`Must be at least ${min}`) : value
}

export const isEmail = value => {
  if (isValidationError(value)) {
    return value
  }
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? new ValidationError('Invalid email address')
    : value
}

export const compareValues = (valueA, valueB) => {
  if (isValidationError(valueB)) {
    return valueB
  }
  return valueA === valueB
    ? valueB
    : new ValidationError('Passwords must match')
}

const validateMap = {
  email: value =>
    compose(
      required,
      isEmail,
      valueFormatting,
    )(value),
  password: value =>
    compose(
      required,
      minValue(3),
      valueFormatting,
    )(value),

  confirmPassword: ([valueA, valueB]) =>
    compose(
      required,
      minValue(3),
      compareValues.bind(null, valueB),
      valueFormatting,
    )(valueA),
}

export const validate = (field: string, value: string | string[], dispatch) => {
  const errors = validateMap[field](value)

  if (Array.isArray(value)) {
    const [validatedValue] = value
    dispatch(validatedValue, { [field]: errors })
    return
  }

  dispatch(value, { [field]: errors })
}
