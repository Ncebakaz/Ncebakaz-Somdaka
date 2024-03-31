 const express = require('express')
const app = express();
const path = require('path');
const errorHandler = require('./middleware/errorHandler');
const { logger } = require('./middleware/logEvents');
const PORT = process.env.PORT || 3500;

// custom middlerware
app.use(logger)

//form data
app.use(express.urlencoded({extended: false }));

//built middleware json
app.use(express.json());

//serve static files
app.use('/', express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', {root: __dirname });
    
})

app.use('/employees', require('./routes/api/employees'));

app.all('*', (req, res) => {
    res.status(404);
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    }else if(req.accepts('json')){
        res.json({'error': '404 not found' })
    }else{
        res.type('txt').send('404 Not found')
    }
})

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));