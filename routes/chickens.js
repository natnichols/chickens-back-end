import { Router } from 'express'
import * as chickensCtrl from '../controllers/chickens.js'

const router = Router()

// ========== Public Routes ===========

// GET to localhost:3001/api/chickens
router.get('/', chickensCtrl.index)
// POST to localhost:3001/api/chickens
router.post('/', chickensCtrl.create)
// DELETE to localhost:3001/api/chickens/:chickenId


export {
  router
}