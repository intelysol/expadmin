const express = require('express')

const {indexView, iconsView, mapView, profileView, tableView, empformView, userlstView, useraddView}= require('../controllers/homeController')
const router= express.Router()

router.get('/', indexView)
router.get('/icons',iconsView)
router.get('/map',mapView)
router.get('/profile',profileView)
router.get('/table',tableView)
router.get('/empform',empformView)
router.get('/useradd',useraddView)
router.get('/userlst',userlstView)

module.exports={
    routes: router
}