import React from 'react';

//export default () => <h1>Hello World</h1>;


export default class App extends React.Component {
  constructor(...args) {
        super(...args);
        // 定义 state
        this.state = {
            value: 'Hello！'
        }
    }

   handleChange(event) {
	  this.setState({value: event.target.value});
	}

  render() {
	  var value = this.state.value;
	  
    return (
       <div>
			<input type="text" value={value} onChange={this.handleChange.bind(this)} />
			 <p>{value}</p>
			<p>
			{
			  names.map(function (name) {
				return <div>Hello, {name}!</div>
			  })
			}
			</p>
        </div>
		
    );
  }
}