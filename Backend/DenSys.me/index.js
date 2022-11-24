import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import session from "express-session";

const usernameAdmin = "admin";
const passwordAdmin = "admin";

const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD', 'PATCH', 'DELETE'],
    credentials: true
  }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: false,
        cookie: {
            sameSite: "strict",
            maxAge: 60 * 60 * 1000 //1 hour
        }
    })
);
app.use('/', UserRoute);


app.get('/about', (req, res) => {
    res.send('about page')
})

app.post("/login", (req, res) => {
    console.log(req.body)
    if (
        req.body.username == usernameAdmin &&
        req.body.password == passwordAdmin
    ) {
        console.log('this is admin')
        req.session.regenerate(function (err) {
            if (err) next(err);

            // store user information in session
            req.session.role = 'admin';

            // save the session before redirection to ensure page
            // load does not happen before session is saved
            req.session.save(function (err) {
                if (err) return next(err);
                res.sendStatus(200)
            });
        });
    } else {
        res.send('sdfaadfadf')
    }
})

app.post('/logout', (req, res) => {
    console.log("logout")
    res.clearCookie('connect.sid', {
        domain: 'localhost',
        path: '/',
        sameSite: "strict"
      })
    req.session.destroy()
    res.sendStatus(200)
})


app.listen(5000, () => console.log("Server up and running..."));
