const mysql=require('mysql')

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'envdata'
})

connection.connect(function(error){
    if(!!error) console.log(error);
    else console.log("Database Connected");
})

const indexView=(req,res,next) =>{
    res.render('home');
}

const iconsView=(req,res,next)=>{
    res.render('icons');
}

const mapView=(req,res,next)=>{
    res.render('map');
}

const profileView=(req,res,next)=>{
    res.render('profile');
}

const tableView=(req,res,next)=>{
    res.render('table');
}

const empformView=(req,res,next)=>{
    res.render('empform');
}

const useraddView=(req,res,next)=>{
    res.render('useradd')
}

const userlstView=(req,res,next)=>{
    let sql="Select * From Users"
    let query=connection.query(sql,(err,rows)=>{
        if(err) throw err;
        res.render('userlst',{
            title: 'testing the mysql crud',
            users: rows
        })
    })
}

module.exports={
    indexView,
    iconsView,
    mapView,
    profileView,
    tableView,
    empformView,
    useraddView,
    userlstView
}