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

const courseContent = {
    "web-development": {
        courseName: "Web Development Fundamentals",
        lessons: [
            { id: 1, title: "Introduction to HTML", duration: "15 min", status: "completed" },
            { id: 2, title: "CSS Basics", duration: "20 min", status: "completed" },
            { id: 3, title: "JavaScript Fundamentals", duration: "30 min", status: "completed" },
            { id: 4, title: "Responsive Design", duration: "25 min", status: "in-progress" },
            { id: 5, title: "React Introduction", duration: "35 min", status: "locked" },
            { id: 6, title: "State Management", duration: "40 min", status: "locked" },
            { id: 7, title: "API Integration", duration: "30 min", status: "locked" },
            { id: 8, title: "Deployment Basics", duration: "25 min", status: "locked" }
        ],
        assignments: [
            { id: 1, title: "Build a Personal Portfolio", dueDate: "Dec 10, 2025", status: "submitted" },
            { id: 2, title: "CSS Grid Layout Challenge", dueDate: "Dec 15, 2025", status: "pending" },
            { id: 3, title: "JavaScript Calculator", dueDate: "Dec 20, 2025", status: "locked" },
            { id: 4, title: "Final Project", dueDate: "Dec 30, 2025", status: "locked" }
        ]
    },
    "mobile-app": {
        courseName: "Mobile App Development",
        lessons: [
            { id: 1, title: "Introduction to Mobile Development", duration: "20 min", status: "not-started" },
            { id: 2, title: "React Native Basics", duration: "30 min", status: "locked" },
            { id: 3, title: "Navigation and Routing", duration: "25 min", status: "locked" },
            { id: 4, title: "State Management in Mobile", duration: "35 min", status: "locked" },
            { id: 5, title: "Working with APIs", duration: "30 min", status: "locked" },
            { id: 6, title: "Native Components", duration: "40 min", status: "locked" },
            { id: 7, title: "App Publishing", duration: "35 min", status: "locked" },
            { id: 8, title: "Performance Optimization", duration: "30 min", status: "locked" }
        ],
        assignments: [
            { id: 1, title: "Todo App", dueDate: "Dec 12, 2025", status: "pending" },
            { id: 2, title: "Weather App with API", dueDate: "Dec 18, 2025", status: "locked" },
            { id: 3, title: "E-commerce App UI", dueDate: "Dec 25, 2025", status: "locked" },
            { id: 4, title: "Final Project", dueDate: "Jan 5, 2026", status: "locked" }
        ]
    },
    "data-science": {
        courseName: "Data Science Essentials",
        lessons: [
            { id: 1, title: "Introduction to Data Science", duration: "25 min", status: "not-started" },
            { id: 2, title: "Python for Data Science", duration: "40 min", status: "locked" },
            { id: 3, title: "Data Analysis with Pandas", duration: "45 min", status: "locked" },
            { id: 4, title: "Data Visualization", duration: "35 min", status: "locked" },
            { id: 5, title: "Statistical Analysis", duration: "50 min", status: "locked" },
            { id: 6, title: "Machine Learning Basics", duration: "45 min", status: "locked" },
            { id: 7, title: "Model Evaluation", duration: "40 min", status: "locked" },
            { id: 8, title: "Real-world Projects", duration: "60 min", status: "locked" }
        ],
        assignments: [
            { id: 1, title: "Data Cleaning Project", dueDate: "Dec 14, 2025", status: "pending" },
            { id: 2, title: "Exploratory Data Analysis", dueDate: "Dec 20, 2025", status: "locked" },
            { id: 3, title: "Build a Prediction Model", dueDate: "Dec 28, 2025", status: "locked" },
            { id: 4, title: "Final Capstone Project", dueDate: "Jan 10, 2026", status: "locked" }
        ]
    },
    "machine-learning": {
        courseName: "Machine Learning Fundamentals",
        lessons: [
            { id: 1, title: "Introduction to ML", duration: "30 min", status: "not-started" },
            { id: 2, title: "Supervised Learning", duration: "45 min", status: "locked" },
            { id: 3, title: "Unsupervised Learning", duration: "45 min", status: "locked" },
            { id: 4, title: "Neural Networks Basics", duration: "50 min", status: "locked" },
            { id: 5, title: "Deep Learning Introduction", duration: "55 min", status: "locked" },
            { id: 6, title: "Model Optimization", duration: "40 min", status: "locked" },
            { id: 7, title: "Computer Vision Basics", duration: "50 min", status: "locked" },
            { id: 8, title: "NLP Fundamentals", duration: "45 min", status: "locked" }
        ],
        assignments: [
            { id: 1, title: "Linear Regression Model", dueDate: "Dec 16, 2025", status: "pending" },
            { id: 2, title: "Classification Problem", dueDate: "Dec 22, 2025", status: "locked" },
            { id: 3, title: "Neural Network Implementation", dueDate: "Dec 29, 2025", status: "locked" },
            { id: 4, title: "Final ML Project", dueDate: "Jan 12, 2026", status: "locked" }
        ]
    },
    "ui-ux-design": {
        courseName: "UI/UX Design Mastery",
        lessons: [
            { id: 1, title: "Design Principles", duration: "25 min", status: "not-started" },
            { id: 2, title: "User Research Methods", duration: "30 min", status: "locked" },
            { id: 3, title: "Wireframing Basics", duration: "35 min", status: "locked" },
            { id: 4, title: "Prototyping with Figma", duration: "40 min", status: "locked" },
            { id: 5, title: "Color Theory", duration: "30 min", status: "locked" },
            { id: 6, title: "Typography in Design", duration: "25 min", status: "locked" },
            { id: 7, title: "Usability Testing", duration: "35 min", status: "locked" },
            { id: 8, title: "Design Systems", duration: "40 min", status: "locked" }
        ],
        assignments: [
            { id: 1, title: "Create User Personas", dueDate: "Dec 11, 2025", status: "pending" },
            { id: 2, title: "Wireframe a Mobile App", dueDate: "Dec 17, 2025", status: "locked" },
            { id: 3, title: "High-Fidelity Prototype", dueDate: "Dec 24, 2025", status: "locked" },
            { id: 4, title: "Complete Design Project", dueDate: "Jan 2, 2026", status: "locked" }
        ]
    },
    "digital-marketing": {
        courseName: "Digital Marketing Fundamentals",
        lessons: [
            { id: 1, title: "Digital Marketing Overview", duration: "20 min", status: "not-started" },
            { id: 2, title: "SEO Basics", duration: "35 min", status: "locked" },
            { id: 3, title: "Social Media Marketing", duration: "30 min", status: "locked" },
            { id: 4, title: "Content Marketing", duration: "25 min", status: "locked" },
            { id: 5, title: "Email Marketing", duration: "30 min", status: "locked" },
            { id: 6, title: "Google Ads", duration: "40 min", status: "locked" },
            { id: 7, title: "Analytics and Tracking", duration: "35 min", status: "locked" },
            { id: 8, title: "Marketing Strategy", duration: "45 min", status: "locked" }
        ],
        assignments: [
            { id: 1, title: "SEO Audit Report", dueDate: "Dec 13, 2025", status: "pending" },
            { id: 2, title: "Social Media Campaign", dueDate: "Dec 19, 2025", status: "locked" },
            { id: 3, title: "Content Strategy Plan", dueDate: "Dec 26, 2025", status: "locked" },
            { id: 4, title: "Complete Marketing Campaign", dueDate: "Jan 8, 2026", status: "locked" }
        ]
    },
    "graphic-design": {
        courseName: "Graphic Design Essentials",
        lessons: [
            { id: 1, title: "Design Fundamentals", duration: "25 min", status: "not-started" },
            { id: 2, title: "Adobe Photoshop Basics", duration: "40 min", status: "locked" },
            { id: 3, title: "Illustrator Fundamentals", duration: "40 min", status: "locked" },
            { id: 4, title: "Layout and Composition", duration: "30 min", status: "locked" },
            { id: 5, title: "Brand Identity Design", duration: "35 min", status: "locked" },
            { id: 6, title: "Print Design", duration: "30 min", status: "locked" },
            { id: 7, title: "Digital Graphics", duration: "35 min", status: "locked" },
            { id: 8, title: "Portfolio Development", duration: "40 min", status: "locked" }
        ],
        assignments: [
            { id: 1, title: "Logo Design Project", dueDate: "Dec 15, 2025", status: "pending" },
            { id: 2, title: "Brand Identity Package", dueDate: "Dec 21, 2025", status: "locked" },
            { id: 3, title: "Poster Design", dueDate: "Dec 27, 2025", status: "locked" },
            { id: 4, title: "Complete Portfolio", dueDate: "Jan 6, 2026", status: "locked" }
        ]
    },
    "cyber-security": {
        courseName: "Cyber Security Fundamentals",
        lessons: [
            { id: 1, title: "Introduction to Cyber Security", duration: "30 min", status: "not-started" },
            { id: 2, title: "Network Security", duration: "45 min", status: "locked" },
            { id: 3, title: "Cryptography Basics", duration: "40 min", status: "locked" },
            { id: 4, title: "Ethical Hacking", duration: "50 min", status: "locked" },
            { id: 5, title: "Vulnerability Assessment", duration: "45 min", status: "locked" },
            { id: 6, title: "Security Protocols", duration: "35 min", status: "locked" },
            { id: 7, title: "Incident Response", duration: "40 min", status: "locked" },
            { id: 8, title: "Security Best Practices", duration: "35 min", status: "locked" }
        ],
        assignments: [
            { id: 1, title: "Security Audit", dueDate: "Dec 17, 2025", status: "pending" },
            { id: 2, title: "Penetration Testing Report", dueDate: "Dec 23, 2025", status: "locked" },
            { id: 3, title: "Security Policy Document", dueDate: "Dec 30, 2025", status: "locked" },
            { id: 4, title: "Final Security Project", dueDate: "Jan 15, 2026", status: "locked" }
        ]
    }
};

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
                    
                    res.send({
                        message:"Enrollment successful",
                        studentId:studentId
                    });
                })
            })
        }
    )
})

app.get('/student/:studentId',(req,res)=>{
    const studentid=req.params.studentId;

    const check=`SELECT * FROM names WHERE student_id=?`;

    conn.query(check,[studentid],
        (err,result)=>{
            if(err){
                console.error(err);
                return res.status(500).send({message:"can not fetch"});
            }
            if(result.length===0){
                return res.status(404).send({message:"Can not find the student"});
            }
            const studentData=result[0];
            const corse=studentData.selected_course;

            const content=courseContent[corse]

            if(!content){
                return res.status(404).send({message:"Course content not found"})
            }else{
            
            res.send({
                student:studentData,
                courseContent:content
            })
        }
        }
    )
})

app.listen(3001,()=>{
    console.log("server running on port 3001"); 
})