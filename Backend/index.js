const express = require("express");
const path = require("path");
const app = express();
let port = process.env.PORT | 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../Frontend")));
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend/Login/login.html"));
});

app.post("/login",(req,res)=>{
    let user = req.body.username;
    let pass = req.body.password;
    if (user === "admin" && pass ==="admin"){
        res.render("./dashboard.ejs",{user})
    }else{
        res.send("Wrong user or pass");
    }
});

app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend/Signup/signup.html"));
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
