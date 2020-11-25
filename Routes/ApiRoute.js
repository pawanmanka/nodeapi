const express = require('express')
      router  = express.Router()
      HomeModel = require('../models/HomeModel');
var loggedin = false;
router.get('/',(req,res,next)=>{
   if(loggedin){
    next();
   }
 });
router.get('/',(req,res)=>{
    res.status(200).json({success:true,data:{name:"sam willam",age:32,gender:"Male"}});
});
router.get('/getAllProducts',async (req,res)=>{
   
      const getDAta =await HomeModel.find();
      console.log(getDAta);
    res.status(200).json({success:true,data:getDAta});
});


router.post('/createUser',async (req,res)=>{
   console.log(req.body);
   const putData={
       name:req.body.name,
       slug:req.body.name,
       desc:req.body.desc,
   }
  const data=await HomeModel.create(putData);
   res.status(201).json({success:true,data:data});
});
router.delete('/deleteUser/:id',(req,res)=>{
    var id =Number(req.params.id);
    res.status(200).json({success:true,data:{id:id}});
});

router.get('*',(req,res)=>{
    // res.statusCode=404;
    // res.send("Page not found");
    // console.log(req);
    // console.log(res);
    res.status(404).json({success:false});
});
module.exports = router;
