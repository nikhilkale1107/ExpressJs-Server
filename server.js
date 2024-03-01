const path = require('path');

const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.urlencoded({extended:false}));

app.use(shopRoutes);
app.use('/admin',adminRoutes);

// app.use((req, res, next)=>{
//     console.log("In the middleware");
//     next(); // Allows the request to continue to the next middleware in line
// });

// app.use('/',(req, res, next)=>{
//     console.log("This always runs");
//     next();
// });


// const server = http.createServer(app);
// server.listen(3000);

app.use((req,res,next) =>{
    res.status(404).sendFile(path.join(__dirname , 'views','404.html'));
})

app.listen(3000);