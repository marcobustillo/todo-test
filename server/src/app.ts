import express, { Express } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import todoRoutes from './routes'

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.use(todoRoutes)

const uri: string = `mongodb+srv://test:testuser@cluster0.vcwfp.mongodb.net/?retryWrites=true&w=majority`

mongoose
    .connect(uri)
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server running on http://localhost:${PORT}`)
        )
    )
    .catch((error) => {
        console.log(error)
        throw error
    })
