const router = reqire('express').Router();

const {User, Post} = require('../../models');

router.get('/',(req,res)=>{
  User.findAll({
    attributes:{
      exclude:['password']
    }
  })
  .then(dbUserData =>{
    res.json(dbUserData);
  })
  .catch(err=>{
    console.log(err);
    res.status(500).json(err);
  })
})