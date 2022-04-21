var sqlServer = require('mysql');

var conexion = sqlServer.createConnection({
host: '//190.147.38.91',
database: 'BPMSoporte',
user: 'AdminSoporte',
password: 'Admin00'
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('Conectado')
    }
});
conexion.end();