const mysql = require('mysql');

// MySQL database connection configuration
const dbConfig = {
    host: process.env.DB_HOST || 'mysql-shamsu557.alwaysdata.net',  // Use environment variable or default
    port: process.env.DB_PORT || 3306,                       // Default MySQL port or environment variable
    user: process.env.DB_USER || 'shamsu557',               // MySQL username from environment
    password: process.env.DB_PASSWORD || '@Shamsu1440',       // MySQL password from environment
    database: process.env.DB_NAME || 'shamsu557_school_database'            // Database name from environment
};

// se connection configuration
// const dbConfig = {
//     host: process.env.DB_HOST || 'sql3.freesqldatabase.com',  // Use environment variable or default
//     port: process.env.DB_PORT || 3306,                       // Default MySQL port or environment variable
//     user: process.env.DB_USER || 'sql3749419',               // MySQL username from environment
//     password: process.env.DB_PASSWORD || 'tSZTsnx4qx',       // MySQL password from environment
//     database: process.env.DB_NAME || 'sql3749419'            // Database name from environment
// };

// Create MySQL connection
const db = mysql.createConnection(dbConfig);

// Connect to MySQL database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Export the database connection
module.exports = db;

// CREATE TABLE members (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     membershipNumber VARCHAR(50) NOT NULL UNIQUE,
//     rank VARCHAR(100) NOT NULL, -- Added rank column
//     fullName VARCHAR(100) NOT NULL,
//     dateOfBirth DATE NOT NULL,
//     gender VARCHAR(10) NOT NULL,
//     phoneNumber VARCHAR(20) NOT NULL,
//     email VARCHAR(100),
//     zone VARCHAR(50) NOT NULL,
//     local_government VARCHAR(100) NOT NULL,
//     ward VARCHAR(100) NOT NULL,
//     pollingUnit VARCHAR(100) NOT NULL,
//     imagePath VARCHAR(255)
// );
