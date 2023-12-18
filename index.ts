import dotenv from 'dotenv';
dotenv.config()
import express from "express"
const app = express();
const port = process.env.port || 3000
app.use(express.json())
app.use("/users", require("./routes/users.routes"))
app.use("*", (req, res) => {
    res.status(404).send({
        message: "The requesting URI was not found or is invalid"
    })
})
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500);
    if (process.env.Environment === "PROD") {
        res.json({
            error: "Something went wrong on the server side"
        })
    } else {
        res.json({
            error: "Something went wrong on the server side",
            stack: err.stack
        })
    }
})
app.listen(port, () => {
    console.log(`Server is listening on ${port}`)
})