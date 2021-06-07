const express = require('express')

const {indexView, iconsView, mapView, profileView, tableView, empformView, userlstView, useraddView, usereditView, userSave, userUpdate, userDelete}= require('../controllers/homeController')
const router= express.Router()

router.get('/', indexView)
router.get('/icons',iconsView)
router.get('/map',mapView)
router.get('/profile',profileView)
router.get('/table',tableView)
router.get('/empform',empformView)
router.get('/useradd',useraddView)
router.get('/userlst',userlstView)
router.get('/useredit/:userid',usereditView)
router.post('/saveuser',userSave)
router.post('/userupdate',userUpdate)
router.get('/userdelete/:userid',userDelete)

module.exports={
    routes: router
}