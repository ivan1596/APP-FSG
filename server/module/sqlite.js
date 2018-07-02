const sqlite3 = require('sqlite3').verbose();
const database = './Prodotti.db';


    module.exports = {
        IdoneoSN : function (codice){
        
        let sql ='UPDATE PRODOTTI SET IDONEO = "SI" WHERE CODICE = ?';
        let db =  new sqlite3.Database(database);
        db.run(sql,codice, function(err){
        if (err) {
            console.error(err.message);
            }

        //db.query('UPDATE PRODOTTI SET IDONEO = "SI" WHERE CODICE = ?',[codice]); SOSTITUIRE QUESTA QUERY CON QUELLA SOTTO OPPURE...VEDI SOTTO
        console.log('Cambiamenti effettuati');

        });
        db.close();

        }
      }  

module.exports = {
    
    getProdotti: function (callback) {
        let db = new sqlite3.Database(database);

        var Prodotti = []


        let sql = `SELECT * FROM PRODOTTI`;

        db.all(sql, [], (err, rows) => {
            if (err) {
                throw err;
            }
            rows.forEach((row) => {
                /*console.log("row", row);*/
                var prodotto = {};
                prodotto.codice=row.Codice;
                prodotto.nome = row.Nome;
                prodotto.datascadenza = row.DataScadenza;
                prodotto.idoneo= row.Idoneo
                //console.log("prodotto", prodotto) se vuoi vedere il prodotto su console quando clicchi sul pulsante prodotto cancella questo commento 
                Prodotti.push(prodotto)
                
            });
            //call the callback
            callback(Prodotti)

        });

        db.close();

    }
}
