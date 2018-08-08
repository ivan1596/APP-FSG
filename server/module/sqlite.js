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
            console.log('Hai immesso correttamente il prodotto nel db!');
    
            });
        db.close();
      
},
    inserisciPuntiRitiro: function (città,Via,CAP) {
    let db = new sqlite3.Database(database);
    let sql = `INSERT INTO PUNTORITIRO (città,Via,CAP)  
    VALUES (?,?,?)`;
    db.run(sql,città,Via,CAP, function(err){
        if (err) {
            console.error(err.message);
            }
        console.log('Hai immesso correttamente nel db il tuo punto di ritiro!');

        });
        db.close();
  
}, 
    addCatalogo: function(){
        let db = new sqlite3.Database(database);
        let sql1 = 'INSERT INTO CATALOGO SELECT Codice,DataScadenza,Nome FROM REGISTRO WHERE IDONEO = "SI"';
       
        db.run(sql1,function(err){
            if(err){
                console.error(err.message);

            }
            console.log('Catalogo Aggiornato');
        });
        db.close();

    },

    getCatalogo : function(callback){
        let db = new sqlite3.Database(database);

        var Prodotti = []


        let sql = `SELECT * FROM CATALOGO`;

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
    getPuntiRitiro: function(callback){
         let db = new sqlite3.Database(database);
         var PuntiRitiro=[];
         let sql = `SELECT * FROM PUNTORITIRO`;
         db.all(sql, [], (err, rows) => {
            if (err) {
                throw err;
            }
            rows.forEach((row) => {
                
                var puntoRitiro = {};
                puntoRitiro.Città=row.Città;
                puntoRitiro.Via = row.Via;
                puntoRitiro.Cap = row.Cap;                
                PuntiRitiro.push(puntoRitiro)
                
            });
            //call the callback
            callback(PuntiRitiro)
     });
     db.close();
    }

}
