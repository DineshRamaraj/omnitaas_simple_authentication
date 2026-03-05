
const usersDB = [
    {
        username: 'admin',
        passwordHash: '$2b$10$B11yO0gMjB/pwvVld01xdu7svNrNIS5adz2ywajd7jjP2g4hTAMSS'
    }
];

const getUserFromDatabase = async (username) => {
    return usersDB.find(user => user.username === username);
};

module.exports = {
    getUserFromDatabase
};
