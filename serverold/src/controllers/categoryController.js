/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-09-19 15:08:42
 * @modify date 2020-09-23 14:15:15
 * @desc [description]
 */

/**
 * Server side operations - categories controller
 * CRUD operations 
 */
 
//const {Category} = require('../models')
const db = require('../models')
const {Op} = require('../models');

module.exports = {
     getCategories(req, res){
        console.log('ghetting cats');
        db.Category.findAll({
            include: [db.Job]
          }).then(todo => res.send(todo));
    },

    
    async postCategory(req, res){
        console.log(req.body);
      //  console.log(Category);
        try{
            const category = await Category.create(req.body);
            console.log('here');
            const categoryJSON = category.toJSON()
            res.send({
                cateogry: categoryJSON
             });
        }catch(error){
            res.status(500);
            res.send("There was a error on the server", error);
        }
    },
    async putCategory(req, res){
        res.status(200);
        res.send("putme");
    },
    async deleteCategory(req, res){
        res.status(200);
        res.send("deleteme");
    },
}
