const React = require('react');
const ReactDOM = require('react-dom');

import {CreateUser, UserList, User} from './user/UserComponents.js';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {person: []};
	}

	componentDidMount() {
		this.UserList();
	}
	
	deleteUser(person) {
		console.log('Getting ready to delete: ' + person.id);
	}
	
	addUser(first, last) {
	    console.log('A name was submitted: ' + first + " " + last);
	    
	    var json = {
	    		firstName: first,
	    		lastName: last
	    }
	    
	    var header = new Headers();
	    
	    header.append("Content-Type", "application/json");
	    
	    fetch('http://localhost:8080/users', {
	        method: 'POST',
	        headers: header,
	        body: JSON.stringify(json)
	      })
	      .then(response => console.log(response.status))
	    
	    var users = this.state.persons;
	    users.push(json);
	    this.setState({persons: users})
	}
	
	UserList() {
	    fetch('http://localhost:8080/users')
	      .then(response => response.json())
	      .then(data => this.setState({person: data}));
	 }

	render() {
		return (
			<div> 
				<CreateUser addUser={this.addUser}/>
				<UserList persons={this.state.person} deleteUser={this.deleteUser}/>
			</div>
		)
	}
}

ReactDOM.render(
		<App />,
		document.getElementById('root')
	)