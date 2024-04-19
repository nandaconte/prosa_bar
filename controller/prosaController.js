
module.exports = class prosaController {
    static home(req, res) {
        res.render('home')
    }
    static contrate(req, res) {
        res.render('contrate')
    }
    static login(req, res) {
        res.render('login')
    }
    static festa(req,res){
        res.render('festa')
    }
    static condo(req,res){
        res.render('condo')
    }
    static homestaff(req,res){
        res.render('homestaff')
    }
    static cadastrostaff(req,res){
        res.render('cadastrostaff')
    }
}

