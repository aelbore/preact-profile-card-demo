/// <reference path="./app.d.ts" />

import { h, render, Component } from 'preact';

const styles = {
	margins: {
		marginTop: '20px',
		marginLeft: '15px',
		marginRight: '15px'
	}
};

export class App extends Component<any, any> {

	constructor(){
		super();
		this.state.profiles = [];
	}

	componentDidMount() {
		fetch('/api/profiles')
		.then(results => results.json())
		.then(data => this.setState({ profiles: data }));
	}

	render(props, state) {
		return (
			<div className="row" style={styles.margins}>
				{ state.profiles.map(profile => 
					<div className="col-md-3">			  
						<profile-card profile={ JSON.stringify(profile) }></profile-card>
					</div>
				)}
			</div>			
		);
	}
}

render(
	<App />, document.querySelector('demo-app')
);
