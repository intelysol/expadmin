const express = require('express')
const expressLayouts= require('express-ejs-layouts')
const bodyParser=require('body-parser')
const path=require('path')
// const mysql=require('mysql')
const homeRoutes = require('./routes/home-routes')

const app = express()
const port = 3000

// const connection=mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'envdata'
// })

// connection.connect(function(error){
//     if(!!error) console.log(error);
//     else console.log("Database Connected");
// })

app.use(expressLayouts)
app.set('view engine','ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname,'public')))
app.use(homeRoutes.routes)

// app.get('/mysql',(req,res)=>{
//     let sql="Select * From Users"
//     let query=connection.query(sql,(err,rows)=>{
//         if(err) throw err;
//         res.render('table',{
//             title: 'testing the mysql crud',
//             users: rows
//         })
//     })
// })


app.listen(port, () => console.log(`App is listening on url http://localhost:3000`))