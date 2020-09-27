/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-09-23 15:59:21
 * @modify date 2020-09-26 23:32:36
 * @desc [description]
 */
// Controller - cateogry request
const db =require('../models')

module.exports = {
  // create category
   async createCompany(req,res) {
    console.log(req.body)
    db.Company.create(
      req.body 
    ).then( company => res.send(company))
  }
,
// fetch all categories - retrieve jobs, if they have one.
  async getCompanies(req,res){
    db.Company.findAll({
      include: [db.Job]
    }).then(job => res.send(job));
  }



}