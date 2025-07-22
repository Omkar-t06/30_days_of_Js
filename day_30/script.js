document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeToggle.textContent = currentTheme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode';

    themeToggle.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeToggle.textContent = newTheme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode';
    });

    // Authentication elements
    const loginForm = document.getElementById('login');
    const registerForm = document.getElementById('register');
    const showLogin = document.getElementById('show-login');
    const showRegister = document.getElementById('show-register');
    const loginFormContainer = document.getElementById('login-form');
    const registerFormContainer = document.getElementById('register-form');
    const authForms = document.getElementById('auth-forms');
    const loggedInInfo = document.getElementById('logged-in-info');
    const currentUsername = document.getElementById('current-username');
    const profileBtn = document.getElementById('profile-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const postForm = document.getElementById('post-form');
    const postSubmit = document.getElementById('post-submit');
    const postsContainer = document.getElementById('posts');
    const notificationList = document.getElementById('notification-list');

    // Toggle between login and register forms
    showRegister.addEventListener('click', (e) => {
        e.preventDefault();
        loginFormContainer.style.display = 'none';
        registerFormContainer.style.display = 'block';
    });

    showLogin.addEventListener('click', (e) => {
        e.preventDefault();
        registerFormContainer.style.display = 'none';
        loginFormContainer.style.display = 'block';
    });

    // Handle registration
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('register-username').value.trim();
        const email = document.getElementById('register-email').value.trim();
        const password = document.getElementById('register-password').value;

        // Basic input validation
        if (username.length < 3) {
            alert('Username must be at least 3 characters long');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        if (password.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }

        // Check if user already exists
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        if (users.some(user => user.email === email)) {
            alert('Email already registered');
            return;
        }

        // Save new user
        users.push({ username, email, password, profilePicture: '' });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful! Please log in.');
        registerForm.reset();
        registerFormContainer.style.display = 'none';
        loginFormContainer.style.display = 'block';
        console.log('User registered:', username);
    });

    // Handle login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value;

        // Basic input validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        if (password.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }

        // Check credentials
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(user => user.email === email && user.password === password);
        if (!user) {
            alert('Invalid email or password');
            return;
        }

        // Log in user
        localStorage.setItem('currentUser', JSON.stringify(user));
        updateUserInfo(user);
        loginForm.reset();
        console.log('Login successful for user:', user.username);
    });

    // Handle logout
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('currentUser');
        updateUserInfo(null);
        console.log('User logged out');
    });

    // Update user info display
    function updateUserInfo(user) {
        if (user) {
            authForms.style.display = 'none';
            loggedInInfo.style.display = 'block';
            currentUsername.textContent = user.username;
            profileBtn.style.display = 'block';
            logoutBtn.style.display = 'block';
        } else {
            authForms.style.display = 'block';
            loggedInInfo.style.display = 'none';
            profileBtn.style.display = 'none';
            logoutBtn.style.display = 'none';
            postsContainer.innerHTML = ''; // Clear posts when logged out
            notificationList.innerHTML = ''; // Clear notifications when logged out
        }
        displayNotifications();
    }

    // Handle post creation
    postForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
        if (!currentUser) {
            alert('Please log in to create a post');
            return;
        }

        const text = document.getElementById('post-text').value.trim();
        const image = document.getElementById('post-image').files[0];

        // Validate post text
        if (!text) {
            alert('Post text cannot be empty');
            return;
        }

        // Show loading spinner
        postSubmit.disabled = true;
        postSubmit.querySelector('.spinner').style.display = 'inline-block';

        const post = {
            id: Date.now(), // Unique ID for each post
            username: currentUser.username,
            text,
            image: '',
            timestamp: new Date().toISOString(),
            likes: [],
            comments: []
        };

        // Handle image upload
        if (image) {
            const reader = new FileReader();
            reader.onload = (event) => {
                post.image = event.target.result;
                saveAndDisplayPost(post);
                postSubmit.disabled = false;
                postSubmit.querySelector('.spinner').style.display = 'none';
            };
            reader.readAsDataURL(image);
        } else {
            saveAndDisplayPost(post);
            postSubmit.disabled = false;
            postSubmit.querySelector('.spinner').style.display = 'none';
        }

        postForm.reset();
    });

    // Save and display post
    function saveAndDisplayPost(post) {
        const posts = JSON.parse(localStorage.getItem('posts') || '[]');
        posts.unshift(post); // Add new post to the top
        localStorage.setItem('posts', JSON.stringify(posts));
        console.log('Post saved:', post);
        displayPosts();
    }

    // Handle like action
    function handleLike(postId, likeBtn) {
        const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
        if (!currentUser) {
            alert('Please log in to like a post');
            return;
        }

        const posts = JSON.parse(localStorage.getItem('posts') || '[]');
        const post = posts.find(p => p.id === postId);
        if (!post) {
            console.error('Post not found for ID:', postId);
            return;
        }

        console.log('Handling like for post:', postId, 'by user:', currentUser.username);
        const userIndex = post.likes.indexOf(currentUser.username);
        if (userIndex === -1) {
            // User hasn't liked, so add like
            post.likes.push(currentUser.username);
            likeBtn.classList.add('liked');
            likeBtn.textContent = `Unlike (${post.likes.length})`;
            // Generate notification for post owner if not self
            if (post.username !== currentUser.username) {
                console.log('Generating like notification for:', post.username);
                addNotification(post.username, `${currentUser.username} liked your post`, postId);
            }
        } else {
            // User has liked, so remove like
            post.likes.splice(userIndex, 1);
            likeBtn.classList.remove('liked');
            likeBtn.textContent = `Like (${post.likes.length})`;
        }

        localStorage.setItem('posts', JSON.stringify(posts));
        console.log('Updated post likes:', post.likes);
        displayPosts();
        displayNotifications();
    }

    // Handle comment submission
    function handleComment(postId, commentInput) {
        const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
        if (!currentUser) {
            alert('Please log in to comment');
            return;
        }

        const commentText = commentInput.value.trim();
        if (!commentText) {
            alert('Comment cannot be empty');
            return;
        }

        const posts = JSON.parse(localStorage.getItem('posts') || '[]');
        const post = posts.find(p => p.id === postId);
        if (!post) {
            console.error('Post not found for ID:', postId);
            return;
        }

        console.log('Handling comment for post:', postId, 'by user:', currentUser.username);
        post.comments.push({
            username: currentUser.username,
            text: commentText,
            timestamp: new Date().toISOString()
        });

        // Generate notification for post owner if not self
        if (post.username !== currentUser.username) {
            console.log('Generating comment notification for:', post.username);
            addNotification(post.username, `${currentUser.username} commented on your post`, postId);
        }

        localStorage.setItem('posts', JSON.stringify(posts));
        console.log('Comment added:', commentText, 'to post:', postId);
        commentInput.value = '';
        displayPosts();
        displayNotifications();
    }

    // Add notification
    function addNotification(recipientUsername, message, postId) {
        const notifications = JSON.parse(localStorage.getItem('notifications') || '[]');
        const notification = {
            id: Date.now(),
            recipient: recipientUsername,
            message,
            postId,
            timestamp: new Date().toISOString(),
            isNew: true
        };
        notifications.unshift(notification);
        localStorage.setItem('notifications', JSON.stringify(notifications));
        console.log('Notification added for:', recipientUsername, 'Message:', message, 'Post ID:', postId);
    }

    // Display notifications
    function displayNotifications() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
        const notifications = JSON.parse(localStorage.getItem('notifications') || '[]');
        notificationList.innerHTML = '';
        if (!currentUser) {
            console.log('No user logged in, notifications cleared');
            return;
        }

        console.log('Fetching notifications for user:', currentUser.username);
        console.log('All notifications:', notifications);
        const userNotifications = notifications.filter(n => n.recipient === currentUser.username);
        console.log('Filtered notifications for', currentUser.username, ':', userNotifications);
        if (userNotifications.length === 0) {
            const li = document.createElement('li');
            li.classList.add('no-notifications');
            li.textContent = 'No new notifications';
            notificationList.appendChild(li);
        } else {
            userNotifications.forEach(notification => {
                const li = document.createElement('li');
                li.classList.add(notification.isNew ? 'new' : 'old');
                li.innerHTML = `${notification.message} <span class="post-timestamp">${new Date(notification.timestamp).toLocaleString()}</span>`;
                notification.isNew = false; // Mark as read
                notificationList.appendChild(li);
            });
        }
        localStorage.setItem('notifications', JSON.stringify(notifications));
        console.log('Notifications displayed for user:', currentUser.username, 'Count:', userNotifications.length);
    }

    // Display all posts
    function displayPosts() {
        const posts = JSON.parse(localStorage.getItem('posts') || '[]');
        const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
        postsContainer.innerHTML = '';
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            const isLiked = currentUser && post.likes.includes(currentUser.username);
            postElement.innerHTML = `
                <p class="post-username">${post.username}</p>
                <p>${post.text}</p>
                ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
                <p class="post-timestamp">${new Date(post.timestamp).toLocaleString()}</p>
                <div class="post-actions">
                    <button class="like-btn ${isLiked ? 'liked' : ''}" data-post-id="${post.id}">
                        ${isLiked ? 'Unlike' : 'Like'} (${post.likes.length})
                    </button>
                    <button class="comment-btn" data-post-id="${post.id}">Comment (${post.comments.length})</button>
                </div>
                <div class="comment-form" style="display: none;">
                    <input type="text" placeholder="Add a comment..." class="comment-input" aria-label="Add a comment">
                    <button class="submit-comment" data-post-id="${post.id}">Submit</button>
                </div>
                <div class="comments">
                    ${post.comments.map(comment => `
                        <div class="comment">
                            <strong>${comment.username}</strong>: ${comment.text}
                            <span class="post-timestamp">${new Date(comment.timestamp).toLocaleString()}</span>
                        </div>
                    `).join('')}
                </div>
            `;
            postsContainer.appendChild(postElement);
        });

        // Add event listeners for like and comment buttons
        document.querySelectorAll('.like-btn').forEach(btn => {
            btn.addEventListener('click', () => handleLike(Number(btn.dataset.postId), btn));
        });

        document.querySelectorAll('.comment-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const commentForm = btn.parentElement.nextElementSibling;
                commentForm.style.display = commentForm.style.display === 'none' ? 'block' : 'none';
            });
        });

        document.querySelectorAll('.submit-comment').forEach(btn => {
            btn.addEventListener('click', () => {
                const commentInput = btn.previousElementSibling;
                handleComment(Number(btn.dataset.postId), commentInput);
            });
        });
    }

    // Check if user is already logged in
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    updateUserInfo(currentUser);
    if (currentUser) {
        displayPosts();
        displayNotifications();
    }

    console.log("Social Media Dashboard initialized");
});