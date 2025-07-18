let username = '';

while (!username) {
    username = prompt('Enter your username:');
}

const ws = new WebSocket('ws://localhost:8000');

const chatWindow = document.getElementById("chatWindow");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");

ws.onopen = () => {
    console.log('Connected to WebSocket server');
};

function appendMessage(user, message, isSelf = false) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message", isSelf ? "self" : "other");

    const userName = document.createElement("strong");
    userName.classList.add("message-username");
    userName.textContent = user;

    const content = document.createElement("div");
    content.classList.add("message-content");
    content.textContent = message;

    const timestamp = document.createElement("div");
    timestamp.classList.add("message-timestamp");
    const now = new Date();
    timestamp.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    messageDiv.appendChild(userName);
    messageDiv.appendChild(content);
    messageDiv.appendChild(timestamp);
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        ws.send(JSON.stringify({ user: username, message }));
        messageInput.value = '';
    }
});

messageInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendButton.click();
});

ws.onmessage = (event) => {
    const { user, message } = JSON.parse(event.data);
    const isSelf = user === username;
    appendMessage(user, message, isSelf);
};

ws.onclose = () => {
    console.log('Disconnected from WebSocket server');
};

ws.onerror = (error) => {
    console.error(`WebSocket error: ${error.message}`);
};