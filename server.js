const express=require("express")
const db = require("./models");
const path=require("path");
const PORT=process.env.PORT || 3000;
const app=express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./public"));

require("./routes/html-routes.js")(app,path);
require("./routes/api-routes.js")(app,path);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("Listening on port %s", PORT)
    });
});
