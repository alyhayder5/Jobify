import mongoose from "mongoose";

const database = async ()=>{
    try {
        const res = await mongoose.connect(process.env.Database_URL)
        console.log('successfully connected')
    } catch (error) {
        console.log('connection failed '+error)
    }
}


export default database
