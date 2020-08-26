var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");
const fs = require("fs")

const session = require('express-session');
const fileUpload = require("express-fileupload");
const flash = require("connect-flash");

var indexadminRouter = require('./routes/indexadmin');
var indexpengelolaRouter = require('./routes/indexpengelola');
const pengelolawisata = require('./routes/pengelola_wisata');
const kelolapengelola = require('./routes/kelolapengelola');
const keloladatawisata = require('./routes/keloladatawisata');
const kelolafeedback = require('./routes/kelolafeedback');
// const kelolawisatawan = require('./routes/kelolawisatawan');
const kelolawisatawan = require('./routes/kelolawisatawan');
const wisatawan = require('./routes/wisatawan');
const admin = require('./routes/admin');
// const usersRouter = require('./routes/user');

var app = express()
app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use("/adminlte",
    express.static(path.join(__dirname, "/node_modules/admin-lte/"))
)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'keyboard cat', cookie: {} }));
app.use(fileUpload());
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());
app.use(
    session({
        secret: "keyboard cat",
        resave: true,
        saveUninitialized: true
    })
);

app.get("/myapi/", (req, res) => {
    fs.readFile("config/thisapiВалидаhassecretary.json", (err, data) => {
        if (err) {
            res.status(400).json({
                error: err
            });
        }
        const docs = JSON.parse(data);
        res.json(docs);
    });
});
app.use('/myapi', wisatawan)

// app.use('/myapi', kelolawisatawan)


app.use(function (req, res, next) {
    res.locals.stuff = {
        url: req.originalUrl
    }
    next();
});

app.use('/', indexadminRouter);
app.use('/', kelolafeedback);
app.use('/', kelolapengelola);
app.use('/', indexpengelolaRouter);
app.use('/', pengelolawisata);
app.use('/', admin);
app.use('/', kelolawisatawan);
app.use('/', keloladatawisata)


app.use(function (req, res, next) {
    next(createError(404));
});
app.use(function (err, req, res, next) {

    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.status(err.status || 500).json({ message: err.message });
});

module.exports = app