import * as express from 'express';
import * as path from 'path';
import * as morgan from 'morgan';
import * as dotenv from 'dotenv';

dotenv.config();

const server = express();

server.use(express.static(path.resolve(__dirname, '../../client/dist')));
server.use(morgan('dev'));

const port = process.env.PORT || 8080;

server.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../../client/dist')));

server.listen(port, () => {
  console.log(`Serving static files on port ${port}`);
})