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

const mysqlView=(req,res,next)=>{
    let sql="Select * From Users"
    let query=connection.query(sql,(err,rows)=>{
        if(err) throw err;
        res.render('table',{
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
    mysqlView
}