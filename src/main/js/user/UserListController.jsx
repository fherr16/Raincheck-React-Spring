import {React, Component} from 'react';

class UserListController extends Component {

    constructor(props) {
        super(props);
        this.state = { users: [] };
    }

    componentWillMount() {
        fetch('http://localhost:8080/users')
        .then(response => response.json())
        .then(data => this.setState({person: data}));
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
}
