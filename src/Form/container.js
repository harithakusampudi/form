import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { bindActionCreators } from 'redux'

import {enableInput, getFieldValue} from '../modules/formData/input'
import FormComponent from './FormComponent'
import { makeSelectFeilds } from '../selectors/input'

const mapStateToProps = createStructuredSelector({
  fields: makeSelectFeilds()
})

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
        getFieldValue,
        enableInput
      },
      dispatch
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormComponent)
