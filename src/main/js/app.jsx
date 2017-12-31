import {React, Component} from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';

class App extends Component {
    render = () => (
            <Routes />
          );
}

ReactDOM.render(
		<App />,
		document.getElementById('root')
	)
