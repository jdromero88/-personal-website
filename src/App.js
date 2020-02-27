import React, {Component} from 'react';
import Header from './containers/Header'
import Content from './containers/Content'
import Footer from './containers/Footer'


class App extends Component {
    render(){
      return (
        <div className="main-container">
          <Header />
          <Content />
          <Footer />
        </div>
      )
    }
}

export default App;
