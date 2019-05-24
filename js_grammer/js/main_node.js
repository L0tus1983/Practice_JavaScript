var http = require('http');
var fs = require('fs');

var indexPage = fs.readFileSync('./index_node.html', 'utf-8');
var nextPage = fs.readFileSync('./next.html', 'utf-8');

var server = http.createServer(function(req, res){
    var target = '';
    switch (req, res) {
        case '/':
        case '/index.html':
            target = indexPage;
            break;
        case '/next':
            target = nextPage;
            break;    
        default:
            res.writeHead(404, {'Content-Type': 'type/plain'});
            res.end('not found');
            return;
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(target);
    res.end();
});
