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