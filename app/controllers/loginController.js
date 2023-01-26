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
}