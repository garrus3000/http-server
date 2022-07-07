
module.exports.get = (url, res) => {
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/text' });
        res.end('Welcome to the my RGB generator API!');
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/text' });
        res.end(JSON.stringify({ message: ` Endpoint not found: ${ url }` }));
    }
}