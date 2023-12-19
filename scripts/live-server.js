import express from 'express';
import { createServer } from 'http';
import { watch } from 'chokidar';
import lodash from 'lodash';
import { WebSocketServer } from 'ws';

const { debounce } = lodash;
const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server });
const port = 8080;

app.use(express.static('dist'));

const sendReload = debounce(() => {
  console.log('Changes stabilized. Sending reload signal to browser...');
  wss.clients.forEach((client) => {
    client.send('reload');
  });
}, 100);

if (process.argv.includes('--watch')) {
  watch('dist/**/*').on('change', () => {
    console.log('Changes detected. Waiting for stabilization...');
    sendReload();
  });
}

server.listen(port, () => {
  console.log(`Live server running at http://localhost:${port}`);
});
