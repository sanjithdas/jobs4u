/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-09-19 15:08:42
 * @modify date 2020-09-21 16:32:40
 * @desc [description]
 */

/**
 * Server side operations
 * CRUD operations 
 */
 
const {Job} = require('../models')
const db = require('../models')
const {Op} = require('../models');

module.exports = {
    async getJobs(req, res){
        //console.log('Gettting jobs');
        try{
           const meData = await db.Job.findAll({
              include: [db.Category]  
           })
          // console.log(meData);
           res.send(meData)
        }catch(error){
            console.log(error);
            res.status(500);
            res.send("There was a error on the server", error);
        }
    },
    async postJob(req, res){
        console.log(req.body);
        try{
            const meData = await Job.create(req.body);
            console.log('here');
            const userJSON = meData.toJSON()
            res.send({
                user: userJSON
                  // Passes the user data to jwtSignUser to be stored into the token
            });
        }catch(error){
            res.status(500);
            res.send("There was a error on the server", error);
        }
    },
    async putJob(req, res){
        res.status(200);
        res.send("putme");
    },
    async deleteJob(req, res){
        res.status(200);
        res.send("deleteme");
    },


    async getJobBasedOnCategory(req,res) {
         await Category.findAll({
          include: [Job]
        }).then(allCategory => res.send(allCategory));
      }
    
}
