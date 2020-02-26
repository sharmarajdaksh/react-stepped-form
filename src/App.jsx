import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
	useHistory
} from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './App.css';

function App(props) {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<Router>
			<Route
				render={({ location, history }) => (
					<SwitchTransition>
						<CSSTransition
							timeout={200}
							classNames='slide'
							key={location.key}
						>
							<Switch location={location}>
								<Route path='/stepone'>
									<div className='App'>
										<StepOne
											username={username}
											setUsername={setUsername}
										/>
									</div>
								</Route>
								<Route path='/steptwo'>
									<div className='App'>
										<StepTwo
											email={email}
											setEmail={setEmail}
										/>
									</div>
								</Route>
								<Route path='/stepthree'>
									<div className='App'>
										<StepThree
											password={password}
											setPassword={setPassword}
										/>
									</div>
								</Route>
								<Route path='/submit'>
									<div className='App'>
										<Submit />
									</div>
								</Route>
								<Route path='/'>
									<Redirect to='/stepone' />
								</Route>
							</Switch>
						</CSSTransition>
					</SwitchTransition>
				)}
			/>
		</Router>
	);
}

const FormBox = props => {
	return <form className='formbox'>{props.children}</form>;
};

const StepOne = props => {
	let history = useHistory();

	return (
		<FormBox>
			<h1 className='kewl-text kewl-text-right'>Your</h1>
			<h1 className='kewl-text kewl-text-right'>Username</h1>
			<input
				type='text'
				name='username'
				placeholder='A username as unique as you are'
				value={props.username}
				onChange={e => props.setUsername(e.target.value)}
			/>
			<button
				onClick={e => {
					e.preventDefault();
					history.push('/steptwo');
				}}
			>
				Next
			</button>
		</FormBox>
	);
};
const StepTwo = props => {
	let history = useHistory();

	return (
		<FormBox>
			<h1 className='kewl-text kewl-text-left'>Your</h1>
			<h1 className='kewl-text kewl-text-left'>Email</h1>
			<input
				type='text'
				name='email'
				placeholder='An email, for formal stuff, you know.'
				value={props.email}
				onChange={e => props.setEmail(e.target.value)}
			/>
			<button
				className='first-button'
				onClick={e => {
					e.preventDefault();
					history.goBack();
				}}
			>
				Back
			</button>
			<button
				onClick={e => {
					e.preventDefault();
					history.push('/stepthree');
				}}
			>
				Next
			</button>
		</FormBox>
	);
};
const StepThree = props => {
	let history = useHistory();

	return (
		<FormBox>
			<h1 className='kewl-text kewl-text-right'>Your</h1>
			<h1 className='kewl-text kewl-text-right'>Password</h1>
			<input
				type='password'
				name='password'
				placeholder='It remains between us ;)'
				value={props.password}
				onChange={e => props.setPassword(e.target.value)}
			/>
			<button
				className='first-button'
				onClick={e => {
					e.preventDefault();
					history.goBack();
				}}
			>
				Back
			</button>
			<button
				onClick={e => {
					e.preventDefault();
					history.push('/submit');
				}}
			>
				Next
			</button>
		</FormBox>
	);
};

const Submit = props => {
	let history = useHistory();

	return (
		<div className='submit'>
			<h1>Thanks for filling this form!</h1>
			<h3>
				Rest assured, all your data gets deleted once you reload this
				app.
			</h3>

			<button
				onClick={e => {
					e.preventDefault();
					history.go(-3);
				}}
			>
				Click here to go back to start
			</button>
		</div>
	);
};

export default App;
