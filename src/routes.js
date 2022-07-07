const { get } = require('./get.routes')
const { post } = require('./post.routes')

module.exports.Router = (req, res) => {
    const { method, url } = req;
    
    console.info({ method, url });

    if (method === 'GET') get(url, res);

    else if (method === 'POST') post(url, res);

    else {
        res.writeHead(405, { 'Content-Type': 'text/text' });
        res.end(JSON.stringify({ message: `Method not allowed: ${ method }` }));
    }
}
