const express = require('express')
const app = express();
const path = require('path');
const cors = require('cors')
const corsOptions = require('./config/corsOptions');
const errorHandler = require('./middleware/errorHandler');
const verifyJWT = require('./middleware/verifyJWT')
const cookieParser = require('cookie-parser')
const { logger } = require('./middleware/logEvents');
const PORT = process.env.PORT || 3500;

// custom middlerware
app.use(logger)

//Cross Origin Resource Sharing
app.use(cors(corsOptions));

//form data
app.use(express.urlencoded({extended: false }));

//built middleware json
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

//serve static files
app.use('/', express.static(path.join(__dirname, '/public')));

//routes
app.use('/', require('./routes/root'));
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/refresh', require('./routes/refresh'));

app.use(verifyJWT);
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