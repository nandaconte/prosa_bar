function conectiondb(){
    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'prosabar'
    })
    con.connect((err) =>{
        if(err){
            console.log('Erro connecting to database...', err)
            return
        }
        console.log('Connection established!')
    })
    return con;
}

module.exports = conectiondb; 