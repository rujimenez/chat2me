import React, {Component} from 'react'
import ReactDom from 'react-dom'
import ChatBox from './components/ChatBox'

class App extends Component {

  render() {

    return(
      <div>
        <h1>hello from react</h1>
        <ChatBox />
      </div>
    )

  }

}
ReactDom.render(<App/>,document.getElementById('app'))
