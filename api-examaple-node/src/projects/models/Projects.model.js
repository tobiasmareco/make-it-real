import {Schema,model} from 'mongoose'
const projectSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    id_author:{
        type:String,
        ref
    }
})