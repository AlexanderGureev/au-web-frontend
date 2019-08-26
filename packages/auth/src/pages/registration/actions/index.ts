import gql from 'graphql-tag'
import * as actions from '../constants'
import { auth } from '@au/common/src/constants/security'
import { load } from '@au/dashboard/src/constants/me'
import { message } from '@ui/message'

export const change = (field, value, errors) => ({
  type: actions.change,
  field,
  value,
  errors,
})

export const register = () => async (dispatch, getState, client) => {
  const { email, password } = getState().auth.registration

  try {
    const { data } = await client.mutate({
      mutation: gql`
        mutation Register($input: RegisterUserInput!) {
          register(input: $input) {
            user {
              id
              email
              profile {
                firstName
                lastName
                avatarPath
              }
            }
          }
        }
      `,
      variables: {
        input: {
          email,
          password,
        },
      },
    })

    dispatch({
      type: actions.clear,
    })
    dispatch({
      type: auth,
      isAuth: true,
    })
    dispatch({
      type: load,
      user: data.register.user,
    })
  } catch ({ graphQLErrors }) {
    const errors = graphQLErrors.reduce((acc, { message: { error } }) => {
      if (Array.isArray(error)) {
        return error.reduce((innerAcc, err) => ({ ...innerAcc, ...err }))
      }
      return { ...acc, internal: error }
    }, {})

    if (errors.internal) {
      message.error(errors.internal)
    }

    dispatch({
      type: actions.setErrors,
      errors,
    })
  }
}

export const clear = () => ({
  type: actions.clear,
})
