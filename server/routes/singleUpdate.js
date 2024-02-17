import express from 'express';
import Job from '../models/jobSchema.js';
const router = express.Router();

router.get('/edit-job/:id',async(req,res)=>{
    const {id} = req.params
    try {
        const data = await Job.findOne({_id: new Object(id)})
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
        res.status(404).send('Internal Server Error');
    }

})

router.get('/job/:id',async(req,res)=>{
    const {id} = req.params
    try {
        const data = await Job.find({_id: new Object(id)})
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
        res.status(404).send('Internal Server Error');
    }

})

router.patch('/edit-job/:id',async(req,res)=>{
    const {id} = req.params;
    try {
        const data = await Job.findByIdAndUpdate(id,req.body);
        console.log(data)
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
        res.status(404).send('Internal Server Error');
    }

})

export default router