const http = require('http');
const routes = require('./src/routes');

const server = http.createServer((req, res) => {
    routes.Router(req, res);
});

const PORT = 3000;
server.listen(PORT, 'localhost', (err) => {
    if(err) console.error(err);
    else console.log(`Server running at http://localhost:${PORT}`);
});
