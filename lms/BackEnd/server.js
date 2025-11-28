const express=require("express");
const mysql=require("mysql2");
const cors=require("cors");

const app=express();
app.use(express.json());
app.use(cors());

const conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"lms",
})

app.post('/register',(req,res)=>{
    const fullname=req.body.fullname;
    const email=req.body.email;
    const username=req.body.username;
    const password=req.body.password;

    conn.query("INSERT INTO users(fullname,email,username,password) VALUES(?,?,?,?)",[fullname,email,username,password],
        (err,result)=>{
            if(err){
                console.error(err);
                res.status(500).send({message:"Error registering user"});
            }else{
                res.send({message:"Registation Successful"});
            }
        }
    )

})
app.post('/login',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    conn.query("SELECT * FROM users WHERE username=? AND password=?",[username,password],
        (err,result)=>{
            if(err){
                console.error(err);
                res.status(500).send({message:"server error"});
            }else{
                if(result.length>0){
                    res.send(result);
                }else{
                    res.send({message:"Enter the correct details"})
                }

            }
        }
    )
})
app.listen(3001,()=>{
    console.log("server running on port 3001"); 
})

