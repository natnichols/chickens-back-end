import { Chicken } from '../models/chicken.js'

export async function create(req, res) {
  try {
    const chicken = await Chicken.create(req.body)
    res.json(chicken)
  } catch (err) {
    console.log(`🚨`, err)
    res.status(500).json(`🚨`, err)
  }
}

export async function index(req, res) {
  try {
    const chickens = await Chicken.find({}).sort({ createdAt: 'desc' })
    res.json(chickens)
  } catch (err) {
    console.log(`🚨`, err)
    res.status(500).json(`🚨`, err)
  }
}

async function deleteChicken(req, res) {
  try {
    const chicken = await Chicken.findByIdAndDelete(req.params.chickenId)
    res.json(chicken)
  } catch (err) {
    console.log(`🚨`, err)
    res.status(500).json(`🚨`, err)
  }
}

export {
  deleteChicken as delete
}