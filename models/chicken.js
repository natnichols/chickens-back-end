import mongoose from 'mongoose'

const Schema = mongoose.Schema

const chickenSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, default: 0 },
  breed: { type: String, default: 'Cute' },
  color: { 
    type: String, 
    default: 'Red',
    enum: ['Red', 'White', 'Black', 'Tan', 'Speckled']
  },
},
  { timestamps: true }
)

const Chicken = mongoose.model('Chicken', chickenSchema)

export {
  Chicken
}