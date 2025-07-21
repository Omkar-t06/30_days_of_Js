// Simulated user database
const users = [
    { username: 'user1', password: 'pass123' },
    { username: 'user2', password: 'pass456' }
];

let posts = [];

// Load posts from localStorage
function loadPosts() {
    const storedPosts = localStorage.getItem('posts');
    posts = storedPosts ? JSON.parse(storedPosts) : [];
}

// Save posts to localStorage
function savePosts() {
    localStorage.setItem('posts', JSON.stringify(posts));
}

// Display posts to all logged-in users
function displayPosts() {
    const postFeed = document.getElementById('post-feed');
    postFeed.innerHTML = '';
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        const user = JSON.parse(localStorage.getItem('loggedInUser'));
        if (post.username === user.username) {
            postElement.classList.add('my-post');
        }
        postElement.innerHTML = `
            <div class="post-header">
                <span class="post-username">${post.username}</span>
                <span class="post-timestamp">${post.timestamp}</span>
            </div>
            <p class="post-text">${post.text}</p>
            ${post.image ? `<img src="${post.image}" class="post-image" alt="Post image">` : ''}
            <div class="post-actions">
                <button class="like-btn" data-id="${post.id}">Like (${post.likes})</button>
                <button class="comment-btn" data-id="${post.id}">Comment</button>
            </div>
            <div class="post-comments" data-id="${post.id}">
                ${post.comments.map(c => `<p><strong>${c.username}</strong>: ${c.text}</p>`).join('')}
            </div>
        `;
        postFeed.appendChild(postElement);

        postElement.querySelector('.like-btn').addEventListener('click', () => handleLike(post.id));
        postElement.querySelector('.comment-btn').addEventListener('click', () => handleComment(post.id));
    });
}

// Like post
function handleLike(postId) {
    const post = posts.find(p => p.id === postId);
    if (post) {
        post.likes++;
        savePosts();
        displayPosts();
    }
}

// Comment on post
function handleComment(postId) {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!user) return alert("Login to comment!");

    const post = posts.find(p => p.id === postId);
    if (post) {
        const text = prompt("Your comment:");
        if (text) {
            post.comments.push({ username: user.username, text });
            savePosts();
            displayPosts();
        }
    }
}

// Handle login
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const uname = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    const user = users.find(u => u.username === uname && u.password === pass);
    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify({ username: uname }));
        document.getElementById('login').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        loadPosts();
        displayPosts();
    } else {
        alert("Invalid credentials");
    }
});

// Handle post submission
document.getElementById('post-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!user) return alert("Login to post!");

    const text = document.getElementById('post-text').value;
    const img = document.getElementById('post-image').value;

    if (text.trim() === "") return alert("Post cannot be empty!");

    const post = {
        id: Date.now(),
        username: user.username,
        text,
        image: img,
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        likes: 0,
        comments: []
    };
    posts.push(post);
    savePosts();
    displayPosts();

    document.getElementById('post-text').value = '';
    document.getElementById('post-image').value = '';
});

// Logout button
document.getElementById('logout-btn').addEventListener('click', () => {
    localStorage.removeItem('loggedInUser');
    location.reload();
});

// On page load
document.addEventListener('DOMContentLoaded', () => {
    loadPosts();
    const user = localStorage.getItem('loggedInUser');
    if (user) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        displayPosts();
    }
});
