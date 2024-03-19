import http from 'node:http'

const HTTP_PORT = 5000;
const HOST = 'localhost';

const server = http.createServer((req, res) => {

    // to do 

});

server.listen(HTTP_PORT, HOST, () => {
    console.log(`Server is listening on port: ${HTTP_PORT}`);
});