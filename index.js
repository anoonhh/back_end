// 1.import the express
const express = require('express')
const EmployeeModel = require('./model')
const employeeModel = require('./model')


//2.initialize express
const app = new express()

//3.middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//3.api creation
app.get('/',(req,res)=>{
    res.send("message from server")
})

app.get('/trial',(req,res)=>{
    res.send("message from trial")
})

app.get('/data',(req,res)=>{
    res.json({"name":"hanoona","age":"20"})
})


// api to add data to db
app.post('/add',(req,res)=>{
    var result =  new EmployeeModel(req.body);
    result.save();
    res.send("data added")
})

app.post('/postdata',(req,res)=>{
    console.log(req.body)
    res.send("data added")
})

//api to view data from db
app.get('/view',async(req,res)=>{
    let result = await employeeModel.find();
    res.json(result);
})

//deleting a document
app.delete('/remove/:id',async(req,res)=>{
    console.log(req.params)
    let id = req.params.id
    await employeeModel.findByIdAndDelete(id);
    res.json({message:'deleted'})
})

//update
app.put('/edit/:id',async(req,res)=>{
    let id = req.params.id
    await employeeModel.findByIdAndUpdate (id,req.body);
    res.send("updated")
})

//4.port
app.listen(8080,()=>{
    console.log("port8080 is up and running")
})