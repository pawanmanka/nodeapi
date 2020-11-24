const http    = require("http"),
      express = require('express'),
      dotenv  = require('dotenv');
//Env vars
dotenv.config({path:'./config/config.env'});
//Express 
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode no port ${process.env.PORT} \nhttp://localhost:${process.env.PORT}`)
    );




// node code

// const server =http.createServer((req,res)=>{
//     const {headers,url, method}= req;
//     // console.log(req);
//     // console.log("header "+headers+ " url "+url+" methods "+method);
//     res.statusCode=502;
//     res.setHeader("Content-Type","application/json");
//     res.write("<h1>Node Js Api</h1>");
//     res.end();
// });

// const PORT = 5000;

// server.listen(PORT,()=>console.log(`Server is running on port http://localhost:${PORT}`));

