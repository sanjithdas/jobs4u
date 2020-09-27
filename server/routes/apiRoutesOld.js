const express= require('express');
const router = express.Router();
const db = require('../models');
const categoryController = require('../controllers/categoryController')
const jobController = require('../controllers/jobController')

// router.get("/all", (req,res)=>{
//   db.Todo.findAll().then(todo => res.send(todo));
// })

router.get("/find/:id",(req,res) => {
  db.Todo.findAll({
    where: {
      id: req.params.id
    }
  }).then(todo => res.send(todo))
})

// router.post('/new', (req,res) =>{
//   db.Todo.create({
//     text: req.body.text
//   }).then( submittedTodo => res.send(submittedTodo))
// })

router.delete('/delete/:id',(req,res)=>{
  db.Todo.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => res.send('success'));
})

router.put('/edit',(req,res)=>{
  db.Todo.update(
    {
      text: req.body.text
    },
    {
      where: {id: req.body.id}
    }
  ).then(() => res.send('success'));
})

router.post('/category', (req,res) =>{
  db.Category.create({
    name: req.body.name
  }).then( submittedTodo => res.send(submittedTodo))
})

router.post('/jobs', (req,res) =>{
  console.log(req.body);
  db.Job.create(
    req.body
  ).then( submittedTodo => res.send(submittedTodo))
})
 

router.get("/allcategory",categoryController.getCategories)
router.get("/alljobs",jobController.getJobs)

// router.post('/jobs', (req,res) =>{
//   db.Category.create({
//     name: req.body.name
//   }).then( submittedTodo => res.send(submittedTodo))
// })

module.exports = router;