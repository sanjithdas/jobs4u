/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-09-23 15:59:21
 * @modify date 2020-09-23 16:01:58
 * @desc [description]
 */
// Controller - cateogry request
const db =require('../models')

module.exports = {
  // create category
   async createCategory(req,res) {
    console.log(req.body)
    db.Category.create(
      req.body 
    ).then( submittedTodo => res.send(submittedTodo))
  }
,
// fetch all categories - retrieve jobs, if they have one.
  async getCategories(req,res){
    db.Category.findAll({
      include: [db.Job]
    }).then(todo => res.send(todo));
  }



}