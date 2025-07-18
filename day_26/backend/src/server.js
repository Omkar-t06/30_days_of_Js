import { WebSocketServer } from 'ws';
import dotenv from 'dotenv';
import http from 'http';

dotenv.config({ path: '../.env' });

const PORT = process.env.PORT || 8000;

const server = http.createServer()
const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
    console.log('New Client Connected');

    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        // Broadcast message to all connected clients
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message.toString());
            }
        });
    });

    ws.on('close', () => {
        console.log('Client Disconnected!');
    });
});

server.listen(PORT, () => {
    console.log(`WebSocket server is running on ws://localhost:${PORT}`);
});