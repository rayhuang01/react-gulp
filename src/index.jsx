import React from 'react';
import ReactDOM from 'react-dom';

var HelloWorld = React.createClass({
	render: function(){
		return (
			<div>Hello {this.props.name}</div>
			);
	}
});

ReactDOM.render( <HelloWorld name="World" />, document.getElementById('root'));