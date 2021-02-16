const express=require('express')
const router=express.Router();

const Post=require('../../models/Post')//model we want to 'post' data in


router.get('/',async(req,res)=>{
  try {
      const posts=await Post.find()
      res.json(posts)
  } catch (error) {
      res.status(400).json({msg:error})
  }    
    
})

router.get('/:id',async(req,res)=>{
 try { const post=await Post.findById({_id:req.params.id})
       res.json(post)
     
 } catch (error) {
     res.status(400).json({msg:error})
 }
})

router.post('/',async(req,res)=>{
    //creating new post with our 'POST MODEL'
    const post=new Post({
        title:req.body.title,
        description:req.body.description

    });
    //saving in DB
    //post.save() return a promise
    try{const savedPost=await post.save();
        res.json(savedPost)
    }catch(err){
        res.status(400).json({msg:err})
    }
     
})
//delete a post
router.delete('/:id',async(req,res)=>{
    try { const postRemoved=await Post.remove({_id:req.params.id})
          res.json(postRemoved)
        
    } catch (error) {
        res.status(400).json({msg:error})
    }
   })
//update a post
router.put('/:id',async(req,res)=>{
    try { const postUpdated=await Post.updateOne({_id:req.params.id},
        {$set:{title:req.body.title}})
          res.json(postUpdated)
        
    } catch (error) {
        res.status(400).json({msg:error})
    }
   })





module.exports=router