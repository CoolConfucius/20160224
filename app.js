import React, { Component } from 'react'; 
import { render } from 'react-dom'; 
import MyInput from 'components/input'; 

class Greeting extends Component {
  constructor(props) {
    super(props); 

    // this.state = { greeting: 'Hello World' };
    this.state = { 
      greetingOne: 'Hello World', 
      greetingTwo: 'Not going to change'
    };
  }

  changeGreeting(value) {
    // this.setState({ greeting: value }); 
    this.setState({ greetingOne: value }); 
    console.log(this.state);
  }

  revertGreeting() {
    this.setState({ greetingOne: 'Hello World' }); 
  }

  render(){
    return (
      <div>
        { this.state.greetingOne }
        <MyInput  revertGreeting={this.revertGreeting.bind(this)} 
                  changeGreeting={this.changeGreeting.bind(this)}/>
      </div>
    );
  }
}

render(<Greeting />, document.getElementById('root')); 