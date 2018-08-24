import React from 'react'
import { Form, Input, Button, Icon, Row, Col } from 'antd'

const FormItem = Form.Item

class InputField extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps) {
      this.setState({enableInput: nextProps.enableInput})
    }
  }

  render () {
    const { getFieldDecorator } = this.props.form
    const {label, keyValue, type, invalidMessage, required, requiredMessage, fieldType, disable, value} = this.props

    const formItemLayout = {
      labelCol: {
        xs: { span: 3 },
        sm: { span: 3 }
      },
      wrapperCol: {
        xs: { span: 6 },
        sm: { span: 6 }
      }
    }
    var rules = []
    if (type) {
      rules.push({
        type: type, message: invalidMessage
      })
    }
    if (required) {
      rules.push({
        required: required, message: requiredMessage
      })
    }

    if (keyValue) {
      return (
        <FormItem
          style={{marginBottom: 0}}
          {...formItemLayout}
          label={label}
        >
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator(keyValue, {rules: rules,
                initialValue: value || null
              })(
                <Input
                  disabled={disable}
                  onChange={(e) => {
                    this.inputChanged(keyValue, e.target.value)
                  }} />
              )}
            </Col>
            <Col span={12}>
              {fieldType === 'input'
                ? null
                : <Button onClick={() => this.onIconClick(keyValue)}><Icon type='to-top' /></Button> }
            </Col>
          </Row>
        </FormItem>
      )
    } else {
      return <div />
    }
  }
  onIconClick (keyValue) {
    this.props.onLookupIconClick(keyValue)
  }

  inputChanged (keyValue, value) {
    this.props.inputChanged(keyValue, value)
  }
}

export default Form.create()(InputField)
