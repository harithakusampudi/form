import React, { Component } from 'react'
import { Table, Card, Layout, Form } from 'antd'
import InputComponent from '../shared/form/InputComponent'
const { Header, Footer, Content } = Layout

const columns=[{
  title: 'Vessel Name',
  dataIndex: 'vesselName',
  key: 'vesselName',
},{
  title: 'Vessel Code',
  dataIndex: 'vesselCode',
  key: 'vesselCode',
}]

class FormComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      fields:this.props.fields
    }
  }

  inputChanged = (key,value) =>{  
    this.setState({[key]:value})
  }
componentWillReceiveProps(nextProps){
  if(nextProps.fields){
    this.setState({fields:nextProps.fields})
  }
}
  onClickLookup=(value)=>{
    const fieldData=this.props.fields.find(key=>{
       return key.keyValue==value
    })
    const {data}=fieldData.lookup
    this.setState({lookupData:data})
  }
  onRow =(record,keyValue) =>({
    onClick:(e)=>{
      this.props.actions.getFieldValue(record)
      this.props.actions.enableInput(true)
      this.setState({lookupData:null})
    }
  })

  renderFormField(fieldDetails){
    switch(fieldDetails.fieldType){
      case 'input' :
        return <InputComponent
        fieldType={fieldDetails.fieldType}
        label={fieldDetails.label}
        disable={fieldDetails.disable}
        keyValue={fieldDetails.keyValue}
        value={fieldDetails.value.value}
        inputChanged={this.inputChanged}
        onLookupIconClick={this.onClickLookup}
        />
        case 'lookup':
        return <InputComponent
        fieldType={fieldDetails.fieldType}
        label={fieldDetails.label}
        disable={fieldDetails.disable}
        value={fieldDetails.value.value}
        keyValue={fieldDetails.keyValue}
        inputChanged={this.inputChanged}
        onLookupIconClick={this.onClickLookup}
        />
    }
  }

  render () {
    const  { fields }= this.state
    return (
      <div>
        <Layout>
          <Header>Form Builder</Header>
          <Content style={{ width: '100%' }}>
            <Card title='' bordered={false}>
              <Form onSubmit={this.handleSubmit} >
                 { 
                  fields.map((eachField) => (
                  this.renderFormField(eachField)
                ))
                 }
              </Form>
            </Card>
          </Content>
          <Footer >
          {this.state.lookupData &&
            <Table
            onRow = {this.onRow}
            columns={columns}
            dataSource={this.state.lookupData}
            />
          }
          </Footer>
        </Layout>
      </div>

    )
  }
}

export default FormComponent
