//We require our own and third party modules
const express = require('express');
const path = require('path');
const routes = require('./routes/routes.js');
const multer = require('multer');

//Initialization
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Template Engine
app.set('view engine', 'ejs');
app.set('views', path.join( __dirname, 'views') );
app.engine('html', require('ejs').renderFile);

//Static files
app.use(express.static( path.join( __dirname, 'public') ));

//Multer es un middlewares
const configMulter = multer.diskStorage({
    destination: path.join(__dirname, 'public', 'uploads'),
    filename: (req, file, cb) =>{
        cb(null, file.originalname);
    }
});
app.use(multer({
    storage: configMulter,
    dest: path.join(__dirname, 'public', 'uploads')
}).single('image'));

//Routes
app.use('/', routes);

//Starting Server
app.listen(app.get('port'), ()=>{
    console.log('Server on Port ', app.get('port'));
});