require('dotenv').config();
// pour réaliser une création de table avec sequelize
// on part de notre objet connecté à la bdd
// un require va executer le code du module ciblé
const sequelize = require('./app/database');
// on définit déjà les modèles, sans ça impossible pour sequelize de les connaitre
const { Product, Brand } = require('./app/models');

const db = {
  create: async () => {
    try {
      await sequelize.drop();
      await sequelize.sync();
      // seulement après avoir crée les tables, je peux mettre des choses dedans
      db.seeding();
    }
    catch (error) {
      console.log(error);
    }
  },
  seeding: async () => {
    try {
      const cd = await Product.create({ 
        title: 'CD',
        description: 'Le morceau de l\'été',
      });
      const k7 = await Product.create({ 
        title: 'Cassette',
        description: 'Nostalgie',
      });
      const universal = await Brand.create({ 
        name: 'Univerval',
      });
      cd.setBrand(universal);
      k7.setBrand(universal);     
    }
    catch (error) {
      console.log(error);
    }
  },
};

// on execute la fonction qui appelle sequelize.sync qui s'occupe de crée des tables à partir des modèles
db.create();