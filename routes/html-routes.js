

module.exports=function(app,path) {

    app.get("/home", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    });
};