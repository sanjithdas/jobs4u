/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-09-23 15:53:13
 * @modify date 2020-09-27 09:17:03
 * @desc [description]
 */
/**
 * required modules/packages
 */
const express= require('express');
const router = express.Router();
const db = require('../models');
const categoryController = require('../controllers/categoryController')
const jobController = require('../controllers/jobController');
const companyController = require('../controllers/companyController')
const { search } = require('./post-routes');

// Category routes

router.post("/category/create",categoryController.createCategory)
router.get("/allcategory",categoryController.getCategories)

// Jobs routes

router.post('/jobs/create', jobController.createJob);
router.get("/alljobs",jobController.getJobs)
router.get("/jobs/:search",jobController.searchJob);

// Company routes

router.post('/company/create', companyController.createCompany);
router.get("/allcompanies",companyController.getCompanies)



module.exports = router;