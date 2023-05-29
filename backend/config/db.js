import mysql from "mysql2";


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456789",
    database: "crudapp",
    connectionLimit: 10,
});


db.connect((err) => {
  if (err) throw err;
  console.log("DB connected")
})

export default db;
