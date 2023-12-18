import express from "express"
const app = express()


app.use(express.json())
app.use("/users", require("./routes/users.routes"))

app.listen(3000, () => {
    console.log("Server is listening on 3000")
})