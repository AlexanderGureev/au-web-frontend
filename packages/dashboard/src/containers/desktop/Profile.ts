import { connect } from 'react-redux'
import { updateProfile } from '../../actions/updateProfile'
import Profile from '../../components/desktop/Profile'
import { lifecycle, compose, withState } from 'recompose'

const enhance = compose(
  withState('newFirstName', 'setNewFirstName', ''),
  withState('newLastName', 'setNewLastName', ''),
  withState('editing', 'setEditing', false),
)

export default connect(
  state => ({
    firstName: state.me.profile.firstName,
    lastName: state.me.profile.lastName,
  }),
  dispatch => ({
    updateProfile: newProfile => dispatch(updateProfile(newProfile)),
  }),
)(enhance(Profile))
