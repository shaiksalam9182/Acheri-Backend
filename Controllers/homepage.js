exports.homepage = (req,res) =>{
    return res.status(200).send({
        success:true,
        message:"Thanks for coming here. But go away...."
    })
}