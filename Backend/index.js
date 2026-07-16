const express = require("express");
const path = require("path");
const app = express();
const { v4: uuidv4 } = require("uuid");
let port = process.env.PORT | 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../Frontend")));
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

let users = [
    {
        id: uuidv4(),
        fullname: "admin",
        email: "admin@gmail.com",
        username: "admin",
        password: "admin123",

    },
];

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend/Login/login.html"));
});

app.post("/login", (req, res) => {
    let { username, password } = req.body;

    // const user = users.find((u) => {
    //     u.username === username;     // this doesnot work without return 
    // });

    const user = users.find((u) => {
        return u.username === username;     // this work instead the uper one
    });
    
    // const user = users.find(u=>u.username===username);

    // console.log(user);
    if (!user) {
        res.send("User Not Found");
    } else {
        if (username === user.username && password === user.password) {
            res.render("./dashboard.ejs", { user });
        } else {
            res.send("Wrong Password");
        }
    }
});

app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend/Signup/signup.html"));
})

app.post("/signup", (req, res) => {
    let uuid = uuidv4();
    let user = {
        id: uuid,
        ...req.body
    }
    users.push(user);
    // console.log(user);
    res.redirect("/");
});

app.get("/setting",(req,res)=>{
    let user = req.params;
    console.log(user);
    res.send("./settings",{users});
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
