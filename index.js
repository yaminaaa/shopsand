require('dotenv').config();
const express = require('express');
const router = require('./app/router');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

// pour tout ce qui est css, img, js, je vais servir de manière statique le contenu de mes fichiers déjà prêts
app.use(express.static('./public'));

app.use(router);

app.listen(3000, () => {
  console.log('Serveur en place sur http://localhost:3000');
});
