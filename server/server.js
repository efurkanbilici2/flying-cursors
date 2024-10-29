const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const { v4: uuidv4 } = require("uuid");
const port = 3001;

const app = express();
const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

app.get("/", (req, res) => {
  res.send("WebSocket and Express server running");
});

wss.on("connection", (ws) => {
  console.log("Client connected");
  ws.id = uuidv4();

  ws.on("message", (data) => {
    const parsedData = JSON.parse(data);
    const message = JSON.stringify({ id: ws.id, ...parsedData });

    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on("close", () => {
    const disconnectMessage = JSON.stringify({ id: ws.id, type: "disconnect" });
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(disconnectMessage);
      }
    });
  });
});

server.listen(port, () => console.log(`http://localhost:${port}`));
