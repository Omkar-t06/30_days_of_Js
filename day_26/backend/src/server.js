import { WebSocketServer} from 'ws';
import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";

dotenv.config({
    path: "./env"
});

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    res.send('Chat Application Server is running!');
});

const server = app.listen(process.env.PORT || 8000, () => {
    console.log(`HTTP server is running on http://localhost:${process.env.PORT}`);
}); 

const wss = new WebSocketServer({server});

wss.on('connection', (ws) => {
    console.log('A client connected');

    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on('close', () => {
        console.log('A client disconnected');
    });
});

// Export the server for use in other files (if necessary)
export default server;