const odata = require('odata');

const oHandler = odata.o('http://127.0.0.1:3000/books', {

});

const bookData = {
  title: "clean code",
  price: 59.00
}

let addBook = async (bookData) => {
  return await oHandler.post('books',bookData).query();
}

let queryBook = () =>{
  oHandler.get('books').query().then(data => {
    console.log(data);
  })
}

//addBook(bookData);
queryBook();

