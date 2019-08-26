import { connect } from 'react-redux'
import { change, register, clear } from '../../actions'
import Registration from '../../components/desktop/Registration'
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
    email: state.auth.registration.email,
    errors: state.auth.registration.errors,
    password: state.auth.registration.password,
    confirmPassword: state.auth.registration.confirmPassword,
  }),
  dispatch => ({
    onRegister: () => dispatch(register()),
    onChangeEmail: value =>
      validate('email', value, (validatedValue, errors) =>
        dispatch(change('email', validatedValue, errors)),
      ),
    onChangePassword: value =>
      validate('password', value, (validatedValue, errors) =>
        dispatch(change('password', validatedValue, errors)),
      ),
    onChangeConfirmPassword: (confirmPassword, password) =>
      validate(
        'confirmPassword',
        [confirmPassword, password],
        (validatedValue, errors) =>
          dispatch(change('confirmPassword', validatedValue, errors)),
      ),
    clear: () => dispatch(clear()),
  }),
)(enhance(Registration))
