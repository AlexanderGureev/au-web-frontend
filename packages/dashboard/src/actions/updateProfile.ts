import gql from 'graphql-tag'
import { changeProfile } from '../constants/me'

export const updateProfile = newProfile => async (
  dispatch,
  getState,
  client,
) => {
  const prevProfile = getState().me.profile

  try {
    const { data } = await client.mutate({
      mutation: gql`
        mutation UpdateProfile($input: UpdateProfileInput!) {
          updateProfile(input: $input) {
            profile {
              firstName
              lastName
              avatarPath
            }
          }
        }
      `,
      variables: {
        input: { ...prevProfile, ...newProfile },
      },
    })

    dispatch({
      type: changeProfile,
      profile: data.updateProfile.profile,
    })
  } catch (e) {
    console.log(e)
  }
}
