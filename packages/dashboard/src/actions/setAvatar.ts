import gql from 'graphql-tag'
import { updateProfile } from './updateProfile'

export const setAvatar = file => async (dispatch, getState, client) => {
  try {
    const { data } = await client.mutate({
      mutation: gql`
        mutation UploadFile($file: Upload!) {
          uploadFile(file: $file) {
            fileName
          }
        }
      `,
      variables: {
        file,
      },
    })

    dispatch(updateProfile({ avatarPath: data.uploadFile.fileName }))
  } catch (e) {
    console.log(e)
  }
}
