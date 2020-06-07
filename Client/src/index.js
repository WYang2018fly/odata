const odata = require('odata');

const oHandler = odata.o('http://127.0.0.1:3000/test', {

});

oHandler.get().query().then(data => {
  console.log(data);
})

