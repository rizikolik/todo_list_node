let mongoose=require("mongoose"),
    Schema=mongoose.Schema;
    
let TaskSchema= newSchema({
    name: {
        type:String,
        required:"Please Enter the Name Of the Task "
    },
    Created_Date:{
        type:Date,
        default:date.now
    },
    status:{
        type:[{
            type: String,
      enum: ['pending', 'ongoing', 'completed']
        }],
        default:["pending"]
    }
    
});
module.exports=mongoose.model("Tasks",TaskSchema);
    