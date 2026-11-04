const express = require("express")
const booksRoutes = require("./routes/books")
const userRoutes = require("./routes/user")
const mongoose = require("mongoose")

const dotenv = require("dotenv")
dotenv.config()

const app = express()

const SERVER_PORT = process.env.SERVER_PORT || 3001
const CONNECTION_URL =  
"mongodb+srv://gargiborphukan_db_user:yzkg5REbReHbMFxf@cluster0.iax3mgt.mongodb.net/week6_bookdb"

app.use(express.json())
app.use(express.urlencoded())

mongoose.connect(CONNECTION_URL, {
    //useNewUrlParser: true,
    //useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err))


app.use("/api/v1", booksRoutes)

app.route("/")
    .get((req, res) => {
        res.send("<h1>MogoDB + Mongoose Example</h1>")
    })

app.listen(SERVER_PORT, () =>{
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})
