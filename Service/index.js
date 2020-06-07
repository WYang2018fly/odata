const odata = require('node-odata');
const server = odata('mongodb://localhost/test');

server.resource('books', { title: String, price: Number });

server.listen(3000,()=>{
  console.log('listen on port 3000')
});