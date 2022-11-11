const {Client} = require('pg');

const client = new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"Shitish",
    database:"project"
})

client.connect();

module.exports=client;