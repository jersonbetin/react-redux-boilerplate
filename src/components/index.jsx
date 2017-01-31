import React, { Component, PropTypes } from 'react'

class App extends Component{
  constructor(props, context){
    super(props,context)
  }

  render(){
    return (
      <div>
        <h1><center>Boilerplate React with Redux</center></h1>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App
