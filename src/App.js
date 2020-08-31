import React, {Component} from 'react';
// import Header from './containers/Header'
import Content from './containers/Content'
// import Footer from './containers/Footer'
class App extends Component {
  state = {
    currentLanguage: 'eng'
  }
    render(){
      return (
        <Content language={this.state.currentLanguage}/>
      )
    }
}

export default App;
