const express = require("express");
const productController = require("../module/controllers/productController");
const {authCheck}=require('../middleware/authCheck');
const { checkPermission } = require("../middleware/rbacMiddleware");
const ProductRoute = express.Router();

ProductRoute.post('/create',authCheck,checkPermission("create_record"),productController.createProduct)
ProductRoute.get('/alldata',authCheck,checkPermission("read_record"),productController.allProduct)
ProductRoute.get('/edit/:id',authCheck,checkPermission("read_record"),productController.singledata)
ProductRoute.post('/update/:id',authCheck,checkPermission("update_record"),productController.updatedata)
ProductRoute.get('/delete/:id',authCheck,checkPermission("delete_record"),productController.deletedata)

module.exports = ProductRoute;