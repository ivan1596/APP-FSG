const sqlite3 = require('sqlite3').verbose();
const database = './FSG-APP.db';


     

module.exports = {

    IdoneoSN : function (codice){
        console.log("codice: ",codice);   
        let sql ='UPDATE REGISTRO SET IDONEO = "SI" WHERE CODICE = ?';
        let db =  new sqlite3.Database(database);
        db.run(sql,codice, function(err){
        if (err) {
            console.error(err.message);
            }
        console.log('Cambiamenti effettuati');

        });
        db.close();

        },
    
    getProdotti: function (callback) {
        let db = new sqlite3.Database(database);

        var Prodotti = []


        let sql = `SELECT * FROM REGISTRO`;

        db.all(sql, [], (err, rows) => {
            if (err) {
                throw err;
            }
            rows.forEach((row) => {
                
                var prodotto = {};
                prodotto.codice=row.Codice;
                prodotto.nome = row.Nome;
                prodotto.datascadenza = row.DataScadenza;
                prodotto.idoneo= row.Idoneo
                
                Prodotti.push(prodotto)
                
            });
            //call the callback
            callback(Prodotti)

        });

        db.close();

    },

    getProdottiIdonei: function (callback) {
        let db = new sqlite3.Database(database);

        var Prodotti = []


        let sql = `SELECT * FROM REGISTRO WHERE IDONEO = "SI"`;

        db.all(sql, [], (err, rows) => {
            if (err) {
                throw err;
            }
            rows.forEach((row) => {
                
                var prodotto = {};
                prodotto.codice=row.Codice;
                prodotto.nome = row.Nome;
                prodotto.datascadenza = row.DataScadenza;
                prodotto.idoneo= row.Idoneo
                
                Prodotti.push(prodotto)
                
            });
            //call the callback
            callback(Prodotti)

        });


        db.close();

    },
    inserisciProdotti: function (nome,CodiceProdotto,dataScadenza) {
        let db = new sqlite3.Database(database);
        let sql = `INSERT INTO REGISTRO (Codice,DataScadenza,Nome)  
        VALUES (?,?,?)`;
        db.run(sql,CodiceProdotto,dataScadenza,nome, function(err){
            if (err) {
                console.error(err.message);
                }
            console.log('RecordImmesso');
    
            });
      
}

}
