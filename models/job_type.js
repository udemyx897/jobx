
import mongoose from "mongoose"




const JobtypeSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true,
     
        minLength: 3
        ,
        maxLength: 40
    },


    slug: {
        type: String,
        required: true,
        trim: true,

        unique: true,
    }



}, { timestamp: true })



export default mongoose.models.Jobtype || mongoose.model('Jobtype', JobtypeSchema)