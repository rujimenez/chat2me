import React, {Component} from 'react'


class ChatBox extends Component {

    constructor(props, context){
        super(props, context)
        this.updateMessage = this.updateMessage.bind(this)
        this.submitMessage = this.submitMessage.bind(this)
        this.state = {
            message: '',
            messages : []
        }
    }

    componentDidMount() {
      console.log('componentDidMount')
      firebase.database().ref('messages/').on('value',(snapshot)=>{
        const currentMessages = snapshot.val()

        if(currentMessages !=null) {
          this.setState ({
            messages: currentMessages
          })
        }

      })
    }

    updateMessage(event) {
      console.log('updateMessage' + event.target.value)
      this.setState({
        message: event.target.value
      })


    }

    submitMessage(event) {
      console.log('submitMessage:'+this.state.message)
      const nextMessage = {
        id: this.state.message.length,
        text: this.state.message

      }
        var list = Object.assign([],this.state.messages)
        list.push(nextMessage)
        this.setState({
          messages: list
        })

    }

    render() {
      const currentMessage = this.state.messages.map((message,i)=>{
          return(
              <li key={message.id}>{message.text}</li>
          )
      })
      return(
          <div>
            <ul>
              {currentMessage}
            </ul>
            <input onChange={this.updateMessage} type="text" placeholder="Message" />
            <br />
            <br />
            <button onClick={this.submitMessage}>Submit</button>
          </div>
      )
  }
}

export default ChatBox
