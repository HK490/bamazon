const express=require("express")
const db = require("./models");
const path=require("path");
const PORT=process.env.PORT || 3000;
const app=express();
const mysql=require("mysql");
const connection=mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "helen490",
    database: "bamazon"
});


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./public"));

require("./routes/html-routes.js")(app,path);
// require("./routes/api-routes.js")(app,path);

app.get("/home", function(req,res) {
    const query=connection.query("SELECT * FROM product")
    console.log("alkfjlkfjda", query)
});


db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("Listening on port %s", PORT)
    });
});
