const sqlite3 = require('sqlite3').verbose();
const database = './Prodotti.db';


module.exports= {
    modIdoneo: function(){
        let db = new sqlite3.Database(database);
        let sql = 'SELECT * FROM PRODOTTI';//SOSTITUIRE QUESTA QUERY CON QUELLA SOTTO OPPURE...VEDI SOTTO
        db.all(sql, [], (err) => {
            if (err) {
                throw err;
            }
            //QUA DENTRO DOVREMMO CICLARE L'ARRAY E PER OGNI CODICE ESEGUIRE LA QUERY QUI SOTTO

            //var sql2 = "UPDATE PRODOTTI SET IDONEO = 'SI' WHERE CODICE = %VARIABILEDAAPP%";
            
           

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
