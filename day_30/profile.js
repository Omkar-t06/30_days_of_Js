document.addEventListener('DOMContentLoaded', () => {
    // Apply theme from localStorage
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Profile elements
    const profilePicture = document.getElementById('profile-picture');
    const profileUsername = document.getElementById('profile-username');
    const profileEmail = document.getElementById('profile-email');
    const profileForm = document.getElementById('profile-form');

    // Load current user
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (!currentUser) {
        alert('Please log in to view your profile');
        window.location.href = 'index.html';
        return;
    }

    // Display user info
    profileUsername.textContent = currentUser.username;
    profileEmail.textContent = currentUser.email;
    if (currentUser.profilePicture) {
        profilePicture.src = currentUser.profilePicture;
        profilePicture.style.display = 'block';
    }

    // Handle profile updates
    profileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newUsername = document.getElementById('edit-username').value.trim();
        const newEmail = document.getElementById('edit-email').value.trim();
        const newPassword = document.getElementById('edit-password').value;
        const newProfilePicture = document.getElementById('edit-profile-picture').files[0];

        // Validate inputs
        if (newUsername && newUsername.length < 3) {
            alert('Username must be at least 3 characters long');
            return;
        }
        if (newEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)) {
            alert('Please enter a valid email address');
            return;
        }
        if (newPassword && newPassword.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }

        // Update user data
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const userIndex = users.findIndex(user => user.email === currentUser.email);
        if (userIndex === -1) {
            alert('User not found');
            return;
        }

        // Handle profile picture
        let updatedProfilePicture = currentUser.profilePicture;
        if (newProfilePicture) {
            const reader = new FileReader();
            reader.onload = (event) => {
                updatedProfilePicture = event.target.result;
                // Update user object
                const updatedUser = {
                    ...currentUser,
                    username: newUsername || currentUser.username,
                    email: newEmail || currentUser.email,
                    password: newPassword || currentUser.password,
                    profilePicture: updatedProfilePicture
                };
                users[userIndex] = updatedUser;
                localStorage.setItem('users', JSON.stringify(users));
                localStorage.setItem('currentUser', JSON.stringify(updatedUser));
                // Update UI
                profileUsername.textContent = updatedUser.username;
                profileEmail.textContent = updatedUser.email;
                profilePicture.src = updatedUser.profilePicture;
                profilePicture.style.display = 'block';
                alert('Profile updated successfully');
                profileForm.reset();
            };
            reader.readAsDataURL(newProfilePicture);
        } else {
            // Update user object without profile picture
            const updatedUser = {
                ...currentUser,
                username: newUsername || currentUser.username,
                email: newEmail || currentUser.email,
                password: newPassword || currentUser.password,
                profilePicture: updatedProfilePicture
            };
            users[userIndex] = updatedUser;
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('currentUser', JSON.stringify(updatedUser));
            // Update UI
            profileUsername.textContent = updatedUser.username;
            profileEmail.textContent = updatedUser.email;
            alert('Profile updated successfully');
            profileForm.reset();
        }
    });
});