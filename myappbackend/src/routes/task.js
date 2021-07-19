import { Router } from "express"
import { 
  deleteTask, 
  getTask, 
  getTasks, 
  getTasksCount, 
  saveTask, 
  updateTask 
} from "../controllers/task"

const router = Router()

/**
 * @swagger 
 * /task:
 *  get:
 *    summary: Get all tasks
 */
router.get('/tasks', getTasks)
/**
 * @swagger 
 * /task/count:
 *  get:
 *    summary: Get total tasks
 */
router.get('/tasks/count', getTasksCount)
/**
 * @swagger 
 * /task/{id}:
 *  get: 
 *    summary: Get specific task
 */
router.get('/tasks/:id', getTask)
/**
 * @swagger 
 * /task:
 *  post:
 *    summary: Save new task
 */
router.post('/tasks', saveTask)
/**
 * @swagger 
 * /task/{id}:
 *  delete:
 *    summary: Delete specific task
 */
router.delete('/tasks/:id', deleteTask)
/**
 * @swagger 
 * /task/{id}:
 *  put:
 *    summary: Updated specific task
 */
router.put('/tasks/:id', updateTask)

export default router