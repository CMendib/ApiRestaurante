const express = require('express');
//inicamos express
const app = express();
//Ahora podemos el puerto
const cors = require('cors');
const port = 3000;

const cafes = require ('./db');

app.use(cors());

// app.get('/', function (req, res) {
//   res.send('Hello World');
// });

//Lo anterior con larow function
// app.get('/', (req,res) => res.send ('Hello Word'));

app.get('/', (req,res) => res.json (cafes));


//ahora escuchar en un puerto en específico
//app.listen(port, function (){
//  console.log ('hola');
// })

//lo anterior pero en console console.log(

app.listen (port, () => console.log(`Escuchando en el puerto ${port} http://localhost:${port} ...`))

// con lo anterior ya podemos levantar el servidor
//desde terminal node index.js
// en terminal para termina dar ctrl c
