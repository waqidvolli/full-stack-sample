import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


// import data from './testData';


ReactDOM.render(
	// React.createElement('h2', null, 'Hello React'),
	// <App contests={data.contests}/>,
	<App initialContests={[]}/>,
	document.getElementById('root')
);