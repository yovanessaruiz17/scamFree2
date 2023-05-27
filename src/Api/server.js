const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app =express();
app.use(cors());

// Configuración de la base de datos
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'scamfree'
};

// Crear una conexión a la base de datos
const connection = mysql.createConnection(dbConfig);

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos establecida.');
});

// Crear una instancia de la aplicación Express


// Ruta de ejemplo para obtener datos de la base de datos
app.get('/bars', (req, res) => {
  // Consultar los bares en la base de datos
  connection.query('SELECT * FROM bars', (err, rows) => {
    if (err) {
      console.error('Error al realizar la consulta:', err);
      res.status(500).send('Error del servidor');
      return;
    }

    // Enviar los datos de los bares como respuesta
    res.json(rows);
  });
});

app.get('/restaurants', (req, res) => {
  // Consultar los restaurantes en la base de datos
  connection.query('SELECT * FROM restaurants', (err, rows) => {
    if (err) {
      console.error('Error al realizar la consulta:', err);
      res.status(500).send('Error del servidor');
      return;
    }

    // Enviar los datos de los restaurantes como respuesta
    res.json(rows);
  });
});

// Iniciar el servidor
const port = 3000; // Puerto en el que se ejecutará el servidor
app.listen(port, () => {
  console.log('Servidor en ejecución en http://localhost:' + port);
});