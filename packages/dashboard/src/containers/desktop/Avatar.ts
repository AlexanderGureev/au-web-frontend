import { connect } from 'react-redux'
import { setAvatar } from '../../actions/setAvatar'
import { deleteAvatar } from '../../actions/deleteAvatar'
import { Avatar } from '@ui/avatar'

export default connect(
  state => ({
    avatarPath: state.me.profile.avatarPath,
  }),
  dispatch => ({
    changeAvatar: file => dispatch(setAvatar(file)),
    deleteAvatar: () => dispatch(deleteAvatar()),
  }),
)(Avatar)
