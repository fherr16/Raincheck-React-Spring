const React = require('react');
const ReactDOM = require('react-dom');

export class CreateUser extends React.Component {
	
	constructor(props) {
	    super(props);
	    this.state = {firstName: '', lastName: ''};
	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleChange(event) {
	    const target = event.target;
	    const value = target.value;
	    const name = target.name;

	    this.setState({
	      [name]: value
	    });
	 }
	
	handleSubmit(event) {
		this.props.addUser(this.state.firstName, this.state.lastName);
		event.preventDefault();
	}
	
	render() {
		return(
				<form onSubmit={this.handleSubmit}>
		        <label>
		          FirstName:
		          <input name ="firstName" type="text" value={this.state.firstName} onChange={this.handleChange} />
		        </label>
		        <label>
		          LastName:
		          <input name = "lastName" type="text" value={this.state.lastName} onChange={this.handleChange} />
		        </label>
		        <input type="submit" value="Submit" />
		      </form>
		)
	}
}

export class UserList extends React.Component {
	
	render() {
		var persons = this.props.persons.map(person =>
			<User key={person.id} person={person} deleteUser={this.props.deleteUser}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
					</tr>
					{persons}
				</tbody>
			</table>
		)
	}
}

export class User extends React.Component {
	
	delete(person) {
		this.props.deleteUser(person);
	}
	
	render() {
		return (
			<tr>
				<td>{this.props.person.firstName}</td>
				<td>{this.props.person.lastName}</td>
				<td><button onClick={this.delete.bind(this, this.props.person)}>Delete</button></td>
			</tr>
		)
	}
}