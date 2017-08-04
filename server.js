import config, {nodeEnv} from './config';
import apiRouter from './api';
// console.log(config, nodeEnv);
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import express from 'express';

const server = express();


server.use(sassMiddleware({
	src: path.join(__dirname, 'sass'),
	dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');

import serverRender from './serverRender';

server.get('/', (req, res) => {
	serverRender()
	.then(content => {
		res.render('index', {
			content
		});

	})
	.catch(console.error);
	
});


server.use('/api', apiRouter);
server.use(express.static('./public'));

server.listen(config.port, config.host, () => {
	console.log('Express listening on ', config.port);
});

