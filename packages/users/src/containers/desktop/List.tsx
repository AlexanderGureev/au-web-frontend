import { connect } from 'react-redux'
import { lifecycle } from 'recompose'
import { load } from '../../actions/list'
import { change } from '../../constants/list'
import List from '../../components/desktop/List'

const enhance = lifecycle({
  componentDidMount() {
    this.props.onLoad()
  },
})

export default connect(
  state => ({
    rows: state.users.list.rows,
  }),
  dispatch => ({
    onLoad: () => dispatch(load()),
    onChangeList: list => dispatch({ type: change, list }),
  }),
)(enhance(List))
