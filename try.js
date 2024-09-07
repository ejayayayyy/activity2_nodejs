const express = require('express');
const app = express();
const path = require('path');
const port = 8080;

app.use(express.static(path.join(__dirname, './view')));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './view', '/index.html'));
});

app.get('/index', (req,res) => {
    res.sendFile(path.join(__dirname, './view', '/index.html'));
});

app.get('/about', (req,res) => {
    res.sendFile(path.join(__dirname, '/view', '/about.html'));
});

app.get('/contact', (req,res) => {
    res.sendFile(path.join(__dirname, '/view', '/contact.html'));
});

app.use((req,res) => {
    res.status(404).sendFile(path.join(__dirname, '/view', '/error.html'));
});

app.listen(port, () => {
    console.log('Server running on ' + port);
});

