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

import './serverRender';
server.get('/', (req, res) => {
	res.render('index', {
		content: 'Hello express'
	});
});


server.use('/api', apiRouter);
server.use(express.static('./public'));

server.listen(config.port, config.host, () => {
	console.log('Express listening on ', config.port);
});

