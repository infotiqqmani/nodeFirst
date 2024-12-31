const app = require('./app');
const connectDB = require('./utils/dbConnection');
const config = require('./config/default');

// Connect to database and start the server
connectDB();

app.listen(config.port, () => {
    console.log(`Server running on http://localhost:${config.port}`);
});
