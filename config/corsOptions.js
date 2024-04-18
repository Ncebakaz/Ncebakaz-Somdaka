const allowedOrigins = [
    'https://127.0.0.1.5500',
    'http:192.168.1.65:3000',
    'http://localhost:3500',
    '0812705024',
    'https://www.facebook.com',
    'https://www.google.com',
    'https://www.linkedin.com'
];
const corsOptions = {
    origin: (origin, callback) => {
        if(allowedOrigins.indexOf(origin) !== -1 || origin){
            callback(null, true)
        }else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}

module.exports = corsOptions;