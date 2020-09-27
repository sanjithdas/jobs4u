/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-09-23 15:56:25
 * @modify date 2020-09-27 13:36:19
 * @desc [description]
 */
// Controller for Job Request

const {Op} = require('../models');
const db =require('../models')
module.exports = {
// create new job
  async createJob (req,res) {
    console.log(req.body);
    db.Job.create(
      req.body
    ).then( submittedTodo => res.send(submittedTodo))
  }
,// fetch all jobs - based on categories
  async getJobs(req,res){
    db.Job.findAll({
      //include: [db.Category,db.Company]
      include: [
        {model:[db.Category,db.Company]}
      ]
    }).then(todo => res.send(todo));
  },
  
  async searchJob(req,res){
    let jobs = null;
    // console.log(req.query.search);
    //console.log(Op);
    const search = req.params.search;
     jobs = await db.Job.findAll({
        where: {[Op.or]: [{ 'title': {[Op.like]: `%${search}%` } }, { 'description': {[Op.like]: `%${search}%` } }, { 'roles': {[Op.like]: `%${search}%` } }, { 'position': {[Op.like]: `%${search}%` } }]}
    }).then(todo => res.send(todo));
   
  }
  
}