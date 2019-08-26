import gql from 'graphql-tag'
import { updateProfile } from '../actions/updateProfile'

export const deleteAvatar = () => async (dispatch, getState, client) => {
  const { avatarPath } = getState().me.profile
  try {
    await client.mutate({
      mutation: gql`
        mutation DeleteFile($fileName: String!) {
          deleteFile(fileName: $fileName) {
            fileName
          }
        }
      `,
      variables: {
        fileName: avatarPath,
      },
    })

    dispatch(updateProfile({ avatarPath: '' }))
  } catch (e) {
    console.log(e)
  }
}
