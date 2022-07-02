const roleaccess=(req,res,next)=>{


     const role=req.body.role


    if(role!="admin"){

        res.send("Not allowed")

    }




}