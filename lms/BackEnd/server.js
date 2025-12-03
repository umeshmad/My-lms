const express=require("express");
const mysql=require("mysql2");
const cors=require("cors");

const app=express();
app.use(express.json());
app.use(cors());

const conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"lms",
})

app.post('/register',(req,res)=>{
    const fullname=req.body.fullname;
    const email=req.body.email;
    const username=req.body.username;
    const password=req.body.password;

    const checkRegister=`SELECT * FROM users WHERE fullname=? OR email=? OR username=?`

    conn.query(checkRegister,[fullname,email,username],
        (err,result)=>{
            if(err){
                console.error(err);
                return res.status(500).send({message:"error to check"});
            }
            if(result.length>0){
                return res.send({message:"Already registered"})
            }
            
            conn.query("INSERT INTO users(fullname,email,username,password) VALUES(?,?,?,?)",[fullname,email,username,password],
                (err,result)=>{
                    if(err){
                        console.error(err);
                        res.status(500).send({message:"Error registering user"});
                    }else{
                        res.send({message:"Registration Successful"});
                    }
                }
            )
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

app.post('/course',(req,res)=>{
    const fullname=req.body.fullname;
    const studentId=req.body.studentId;
    const email=req.body.email;
    const phone=req.body.phone;
    const selectedCourse= req.body.selectedCourse;
    const educationLevel=req.body.educationLevel;
    const address=req.body.address;
    const safename=fullname.replace(/[^a-z0-9_]/gi, "").toLowerCase();

    // Check name safety first
    if (!safename){
        return res.send({message:"Enter the Valid name"});
    }
    
    const checkname=`SELECT fullname FROM names WHERE fullname=? OR email=? OR phone=? OR student_id=?`
    
    conn.query(checkname,[fullname,email,phone,studentId],
        (err,result)=>{
            if(err){
                console.error(err);
                return res.status(500).send({message:"Cannot check"});
            }
            
            if(result.length>0){
                return res.send({message:"You are already enrolled"})
            }
                
            const insertname= `INSERT INTO names(fullname,student_id,email,phone,selected_course,education_level,address) VALUES(?,?,?,?,?,?,?)`;

            conn.query(insertname,[fullname,studentId,email,phone,selectedCourse,educationLevel,address],(err,result)=>{

                if(err){
                    console.error(err);
                    return res.send({message:"cannot send data"});
                }

                const tablequerry=`CREATE TABLE ${safename} (id INT AUTO_INCREMENT PRIMARY KEY,fullname VARCHAR (100),student_id VARCHAR(100),email VARCHAR(100),phone VARCHAR(100), selected_course VARCHAR(100), education_level VARCHAR(100),address VARCHAR (100))`;

                conn.query(tablequerry,(err,result)=>{
                    if(err){
                        console.error(err);
                        return res.send({message:"Error creating table"});
                    }
                    
                    res.send({message:"Enrollment successful"});
                    
                })
                
            })
        }
    )
})

app.listen(3001,()=>{
    console.log("server running on port 3001"); 
})