import express from "express"
import taskRoutes from "./routes/task"
import cors from "cors"
import morgan from "morgan"

import swaggerJSDoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"
import { options } from "./swaggerOptions"

const app = express()

const specs = swaggerJSDoc(options)

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

app.use(taskRoutes)

app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs))

export default app