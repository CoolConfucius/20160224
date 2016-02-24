import React, { Component } from 'react'; 
import { render } from 'react-dom'; 
import MyInput from 'components/input'; 

class Greeting extends Component {
  render(){
    return (
      <div>
        Hello World!!!!
        <MyInput />
      </div>
    );
  }
}

render(<Greeting />, document.getElementById('root')); 