import gql from 'graphql-tag'
import { clear } from '@au/dashboard/src/constants/me'
import * as actions from '../constants/security'

export const logout = () => async (dispatch, getState, client) => {
  try {
    await client.mutate({
      mutation: gql`
        mutation Logout {
          logout
        }
      `,
    })

    dispatch({
      type: actions.logout,
    })
    dispatch({
      type: clear,
    })
  } catch ({ graphQLErrors }) {
    console.log(graphQLErrors)
  }
}
