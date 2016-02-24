import React, { Component } from 'react'; 

class MyInput extends Component {
  constructor(props) {
    super(props); 

    this.state = { text: '' };
  }

  changeText(e) {
    // console.log('event:', e);
    // console.log('event:', e.target.value);
    this.setState({ text: e.target.value }); 
  }

  click() {
    console.log('Hello There');
    console.log('State: ', this.state);
    this.props.changeGreeting(this.state.text)
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.changeText.bind(this)} />
        <button onClick={this.props.changeGreeting.bind(this, this.state.text)}>Click Me!</button>
        <button onClick={this.props.revertGreeting} >Revert</button>
      </div>
    );
  }
}

export default MyInput;