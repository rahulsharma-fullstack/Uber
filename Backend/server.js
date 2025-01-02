const dotenv = require('dotenv');
const cors = require('cors');
const http = require('http');
const app = require('./app');

dotenv.config(); // Load environment variables

const port = process.env.PORT || 3000;

// Middleware (if not already in app.js)
app.use(cors());

const server = http.createServer(app);

server.listen(port, () => {
    console.log('Server is running on port', port);
});
