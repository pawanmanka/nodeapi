const express = require('express')
      router  = express.Router();

router.get('/',(req,res)=>{
    res.write("<h1>Home Page</h1>");
    res.end();
});


module.exports = router;
