import mongoose from "mongoose";

const foodschema = new mongoose.Schema({
    name: {type: String,required: true},
    description: {type: String,required: true},
    price: {type: Number,required: true},
  image: {type: Number,required: true},
    category: {type: Number,required: true},

})

const foodModel = mongoose.models.food || mongoose.model("food",foodschema)

export default foodModel;