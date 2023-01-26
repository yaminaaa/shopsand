const { Product } = require('../models');

const controller = {
  home: async function(req, res) {
    const data = await Product.findAll();
    res.render('home', {
      products: data,
    });
  },
  product: async function(req, res) {
    const id = req.params.id;
    const product = await Product.findByPk(id, {
      include: 'brand',
    });
    res.render('product', {
      product: product,
    });
  }
};

module.exports = controller;

/*
Regarde le `mainController`, on ne gère pas le cas ou la BDD ne répondrait pas, 
voir pour ajouter des block `try/catch`
*/
async viewSignUp(req, res) {
  res.render('login/signup');
},
async handleSignUp(req, res) {
  try {
    if(req.body.password === req.body.passwordConfirm) {
      req.body.password = await bcrypt.hash(req.body.password, 10);

      const user = await User.create(req.body);

      if(user) {
        res.redirect('/login');
      } else {
        res.redirect('/signUp?error=UnknownError');
      }
    } else {
      res.redirect('/signUp?error=passwordMismatch');
    }
  } catch(err) {
    res.redirect('/signUp?error=UnknownError');
  }
},

async doLogout(req, res) {
  req.session.user = null;
  res.redirect('/');
}