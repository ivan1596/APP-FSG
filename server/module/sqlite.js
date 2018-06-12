const sqlite3 = require('sqlite3').verbose();
const database = './Prodotti.db';

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
                console.log("prodotto", prodotto)
                Prodotti.push(prodotto)
                
            });
            //call the callback
            callback(Prodotti)

        });

        db.close();

    }
}
