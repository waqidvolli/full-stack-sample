import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

import axios from 'axios';
import config from './config';


const serverRender = () => 
axios.get(`${config.serverUrl}/api/contests`)
	.then( resp => {
		//console.log(resp);
		return ReactDOMServer.renderToString(
			<App initialContests={resp.data.contests}/>
		);
	});


// axios.get(`${config.serverUrl}/api/contests`)
// 	.then( resp => {
// 		console.log(resp.data.contests);
// 	})
// 	.catch(console.error);

export default serverRender;