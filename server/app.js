"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var cors = require('cors');
var bodyParser = require('body-parser');
var Model = require('./model');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
var port = 4000;
app.post('/article', function (req, res) {
    var article = req.body.article;
    Model.save(article);
    res.status(201).end();
});
app.get('/article/:articleId', function (req, res) {
    var articleId = req.params.articleId;
    var article = Model.getById(articleId);
    res.status(200).json(article);
});
app.get('/articles', function (req, res) {
    var articles = Model.all();
    res.status(200).json(articles);
});
app.put('/article/:articleId', function (req, res) {
    var article = req.body;
    Model.save(article);
    res.status(200).json(article);
});
app.listen(port, function () { return console.log("Example app listening on port " + port + "!"); });
