var http = require('http')
var util = require('util')
var formidable = require('formidable')

var server = http.createServer(function(req, resp){
    resp.setHeader('Access-Control-Allow-Origin', '*')
    resp.setHeader('Access-Control-Allow-Headers', 
        'Origin, X-Requested-With, Content-Type', 'Accept')

    if(req.method == 'POST') {
        processForm(req, resp)
        return;
    }
    else if(req.method == 'GET' && req.url.endsWith('languages')){
        sendLanguages(req, resp);
        return;
    }

    resp.end();
})

server.listen(3200);
console.log('listening on 3200');

function sendLanguages(req, resp){
    resp.writeHead(200, {
        'content-type': 'text/plain'
    });
    resp.write(JSON.stringify([
        'English', 'Spanish', 'Portugese'
    ]));
    resp.end();
}

function processForm(req, resp){
    var form = new formidable.IncomingForm();

    form.parse(req, function(err, fields){
        resp.writeHead(200, {
            'content-type': 'text/plain'
        })

        var data = JSON.stringify({
            fields: fields
        });

        resp.end(data)

        console.log('posted fields \n');
        console.log(data);
    });
}

