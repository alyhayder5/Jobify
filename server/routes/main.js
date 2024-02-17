import express from 'express';
import Job from '../models/jobSchema.js'
const router = express.Router();

router.get('/',async(req,res)=>{
    const data = await Job.find()
    res.status(200).send(data)
})


router.post('/',async(req,res)=>{
    const data = req.body;
    
    const newJob = new Job({
        ...data
    });
    await newJob.save();
    res.status(200).send('')
})

router.get('/:email',async(req,res)=>{
    const {email} = req.params
    const data = await Job.find({postedBy: email})
    res.status(200).send(data)
})

router.delete('/:id',async(req,res)=>{
    const {id} = req.params
    const data = await Job.findByIdAndDelete(id)
    res.status(200).send(data)
})


router.get('/:id',async(req,res)=>{
    console.log('juuuu')
    const {id} = req.params
    console.log(id)
    try {
        const data = await Job.findOne({_id: new Object('65c7eccc98748cda45b86530')})
        console.log(data)
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
        res.status(404).send('Internal Server Error');
    }

})




export default router