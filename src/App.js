import React, { Component } from 'react'
import 'antd/dist/antd.css'
import './App.css'
import FormData from './Form/container'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputEnable: false
    }
  }
  render () {
    return (
      <FormData />
    )
  }
}

export default App
