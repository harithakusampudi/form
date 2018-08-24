import React, { Component } from 'react'
import { Table, Card, Layout, Form,Button } from 'antd'
import InputComponent from '../shared/form/InputComponent'
import FormItem from 'antd/lib/form/FormItem';
const { Header, Footer, Content } = Layout

class FormComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      fields:this.props.fields
    }
  }


  componentWillReceiveProps(nextProps){
    if(nextProps.fields){
      this.setState({fields:nextProps.fields})
    }
  }

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
                <FormItem>  
                  <Button type="primary" htmlType="submit">Submit</Button>
                </FormItem>
              </Form>
            </Card>
          </Content>
          <Footer >
          {this.state.lookupData &&
            <Table
            onRow = {this.onRow}
            columns={this.state.columns}
            dataSource={this.state.lookupData}
            />
          }
          </Footer>
        </Layout>
      </div>

    )
  }
  inputChanged = (key,value) =>{  
    this.setState({[key]:value})
  }

  onClickLookup=(value)=>{
    const fieldData=this.props.fields.find(key=>{
      if(key.keyValue==value){
          // var fields=key.dependency.map(el=>el.field )
          // console.log("keyee",fields);
          // for(var i=0;i<fields.length;i++){
          //   var fieldValue=fields[i]
          //     if(key.keyValue===fieldValue &&  key.disable===true){
          //     alert(`select ${fieldValue}`)
          //   }else return key.keyValue==value
          return key.keyValue==value

          }
    })
    const {data}=fieldData.lookup
    this.setState({lookupData:data})
    var object=Object.keys(data[0])
    this.columns(object)
  }

  columns=(object)=>{
    object.shift()
    var columns=[]
    for(var i=0;i<object.length;i++){
    var newColumn={
      title:object[i].toUpperCase(),
      dataIndex:object[i]
    }
    columns.push(newColumn)
  }
  this.setState({columns:columns})
  }

  onRow =(record,keyValue) =>({
    onClick:(e)=>{
      this.props.actions.getFieldValue(record)
      this.props.actions.enableInput(true)
      this.setState({lookupData:null})
    }
  })
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
        if (!err) {
            console.log('Received values of form: ', values);
        }
    });
}

}

export default  Form.create()(FormComponent)
