import { connect } from 'react-redux'
import { change, login, clear } from '../../actions'
import Login from '../../components/desktop/Login'
import { validator } from '@utils/validator'
import { lifecycle } from 'recompose'
const { validate } = validator

const enhance = lifecycle({
  componentWillUnmount() {
    this.props.clear()
  },
})

export default connect(
  state => ({
    email: state.auth.login.email,
    password: state.auth.login.password,
    errors: state.auth.login.errors,
  }),
  dispatch => ({
    onChangeEmail: value =>
      validate('email', value, (validatedValue, errors) =>
        dispatch(change('email', validatedValue, errors)),
      ),
    onChangePassword: value =>
      validate('password', value, (validatedValue, errors) =>
        dispatch(change('password', validatedValue, errors)),
      ),
    onLogin: () => dispatch(login()),
    clear: () => dispatch(clear()),
  }),
)(enhance(Login))
