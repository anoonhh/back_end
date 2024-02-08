const mongoose = require("mongoose")

//connection

mongoose.connect("mongodb+srv://hanoonah:7654321h@cluster0.cirlurk.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("db connected")
})
.catch(err => console.log(err)) 


let mongoSchema = mongoose.Schema
const EmployeeSchema = new mongoSchema ({

    ename:String,
    eage:Number,
    eposition:String,
    esalary:Number, 
})
var employeeModel = mongoose.model("employee",EmployeeSchema)
module.exports = employeeModel