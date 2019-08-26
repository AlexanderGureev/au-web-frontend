import gql from 'graphql-tag'
import * as actions from '../constants/me'
import { auth } from '@au/common/src/constants/security'

export const init = () => async (dispatch, getState, client) => {
  try {
    const {
      data: { me },
    } = await client.query({
      query: gql`
        query Me {
          me {
            id
            email
            profile {
              firstName
              lastName
              avatarPath
            }
          }
        }
      `,
    })

    dispatch({
      type: auth,
      isAuth: true,
    })
    dispatch({
      type: actions.load,
      user: me,
    })
  } catch (e) {
    console.log(e)
  }
}

export const clear = () => ({
  type: actions.clear,
})
