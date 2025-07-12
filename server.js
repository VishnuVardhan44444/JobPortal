// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const {Pool} = require('pg');

// const app = express();
// const Port = 3000;


// app.use(cors());
// app.use(bodyParser.json());

// const pool = new Pool({
//     user:'postgres',
//     host:'localhost',
//     password:'1234567890',
//     database:'example',
//     port:5432
// });

// app.post('/searchjobs',async(req,res)=>{
// const {jobtitle,location,experience} = req.body;
//     try{
//         await pool.query(
//             'INSERT INTO jobsearch(jobtitle,location,experience)Values($1,$2,$3)',
//             [jobtitle,location,experience],
//         );
       
//         res.json({message:'user saved successfully'})
//     }
//     catch(err)
//     {
//         console.error(err);
//         res.status(500).json({message:'Error is Avoiding to store in the database'});
//     }
// });

// // const Port = process.env.Port||5000;
// app.listen(Port,()=>{
//     console.log('connected to db')
//     console.log(`Server running on:${Port}`);
// });