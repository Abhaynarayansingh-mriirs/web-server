const express= require('express');
const hbs= require('hbs');
const fs= require('fs');

var app = express();//for config
app.set('app engine','hbs');
hbs.registerPartials(__dirname + '/views/partials')
hbs.registerHelper('date',()=>{
return new Date().getFullYear()
});
app.use((req,res,next)=>{
    var now = new Date();
    var log= `${now}: ${req.url} ${req.method}`;
    console.log(`${now}`)
    fs.appendFileSync('time.log',log+ '\n')
    next();
})
app.use(express.static(__dirname + '/views'));
//http rout handlers
//registering a handler

app.get('/',(req,res)=> {
   // res.send('<h1>hello Express!</h1>'); 
res.render('welcome.hbs',{
    welcome: 'hi abhay',
    pageTitle: 'this is the title',
    
})
});
app.get('/about',(req,res)=>{
    res.render('about.hbs', {
    pageTitle: 'this is the title',
    
    });
});
app.listen(3000);