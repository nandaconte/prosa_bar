
module.exports = class prosaController {
    static home(req, res) {
        res.render('home')
    }
    static contrate(req, res) {
        res.render('contrate')
    }
    static login(req, res) {
        res.render('login')
        let message = '';
        res.render('login', { message: message })
    }
    static festa(req, res) {
        res.render('festa')
    }
    static condo(req, res) {
        res.render('condo')
    }
    static homestaff(req, res) {
        res.render('homestaff')
        if (req.session.user) {
            let con = conectiondb();
            let query2 = 'SELECT * FROM users WHERE email LIKE ?';
            con.query(query2, [req.session.user],
                function (err, results) {
                    res.render('homestaff')
                })
        } else {
            res.redirect("/")
        }
    }
    static cadastrostaff(req, res) {
        res.render('cadastrostaff')
       
    }
    static savecadastrostaff(req,res){
        let nome = req.body.nome;
        let email = req.body.email;
        let senha = req.body.senha;

        let con = conectiondb();
        let query = 'INSERT INTO users(??, ??, ??) VALUES (?, ?, ?)';
        const data = ['nome', 'email', 'senha', nome, email, senha]
        con.query(query, data, function (err) {
            if (err) {
                console.log(err)
            } else {
                console.log("Usuario adicionado com email " + email);
                res.redirect('/login')
            }
        });
    }

    
    static loginstaff (req, res){
        res.render('loginstaff')
        let email = req.body.email;
        let senha = req.body.senha;
        let con = conectiondb();
        let query = 'SELECT * FROM users WHERE senha = ? AND email LIKE ?';
    
        con.query(query, [senha, email], function(err, results){
            if(results.length > 0){
                req.session.user = email; 
                console.log('Login efetuado com sucesso!');
                res.render('homestaff', {message:results});
            }else{
                let message = 'Login ou senha incorreta';
                res.render('login', {message: message})
            }
        })
    }

}

