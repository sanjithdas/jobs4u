/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-09-20 14:35:09
 * @modify date 2020-09-23 14:20:31
 * @desc [description]
 */
/**
 * initialising and importing required modules.
 */
const express = require('express')
const router = express.Router()
const jobController = require('../controllers/jobsController')
const categoryController = require('../controllers/categoryController');
const { db } = require('../config/config');
const dbm = require('../models')

/**
 * routes for jobs 
 * 1. listing all jobs, 
 * 2. create new jobs.
 * 3. update existing jobs
 * 4. Delete the current job
 */
router.get('/jobs', jobController.getJobs)
router.post('/job', jobController.postJob)
router.put('/job', jobController.putJob)
router.delete('/job', jobController.deleteJob)

/**
 * routes for category listing.
 * 1. listing all the categories
 * 2. create new categories
 * 3. update the existing categories
 * 4. delete the categories
 * 
 */
router.get('/categories', (req,res) =>{
  console.log('ghetting cats');
  dbm.Category.findAll({
      include: [dbm.Job]
    }).then(todo => res.send(todo));
})
router.post('/category', categoryController.postCategory)
router.put('/category', categoryController.putCategory)
router.delete('/category', categoryController.deleteCategory)

/**
 * listing Job based on category
 */
router.get("/job/category",jobController.getJobBasedOnCategory);




module.exports = router