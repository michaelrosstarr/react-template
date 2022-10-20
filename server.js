// 33 Michael Tarr
import express from 'express';
import socketIo from 'socket.io';
import http from 'http';
import { MongoClient } from 'mongodb';

const app = express();
app.use(express.static("public"));

const server = http.createServer(app);
const io = socketIo(server);

const url = 'connection-string-here';
const client = new MongoClient(url);

io.on('connection', async (socket) => {
    console.log(`New Client Connected: ${socket.id}`);
    const data = await connectMongo();
    socket.emit("mongodb", data);
})

server.listen(3000, async (error) => {
    await moongoCreate();
    error && console.log(error);
    !error && console.log(`Server running: localhost:3000`);
})

const connectMongo = async () => {
    // const db = client.db('users').collection('users');
    // return await db.find({}).toArray();
    return;
}

const moongoCreate = async () => {
    await client.connect();
    console.log('Connected successfully to database');
}