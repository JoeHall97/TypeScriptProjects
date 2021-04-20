import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { App } from './components/App';
import { reducers } from './reducers/index';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root')
);

/*interface AppProps {
	color?: string;
}

/// FUNCTIONAL COMPONENT IN TS
// const App = (props: AppProps): JSX.Element => {
// 	return <div>{props.color}</div>;
// };

interface AppState {
	counter: number;
}

/// STATEFUL COMPONENT IN TS
class App extends React.Component<AppProps, AppState> {
	// CAN OVERRIDE THE STATE PROPERTY WITH THE FOLLOW, AS LONG AS YOU DON'T USE AppState:
	// state = { counter: 0 }
	// ALTERNATIVELY, YOU COULD NOT USE A CONSTRUCTOR AT ALL AND JUST HAVE THE ABOVE STATEMENT(S)

	constructor(props: AppProps) {
		super(props);

		this.state = { counter: 0 };
	}

	onIncrement = (): void => {
		this.setState({ counter: this.state.counter + 1 });
	};

	onDecrement = (): void => {
		this.setState({ counter: this.state.counter - 1 });
	};

	render() {
		return (
			<div>
				<button onClick={this.onIncrement}>Increment</button>
				<button onClick={this.onDecrement}>Decremenet</button>
				{this.state.counter}
			</div>
		);
	}
}*/
