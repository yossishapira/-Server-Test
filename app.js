import express from "express";
import routerUsres from "./routes/usersR.js";
import registerMessage from "./routes/messagesR.js";


const app = express();
const port = 3010;

app.use(express.json());

app.use("/", routerUsres);
app.use("/",registerMessage)
app.listen(port, () => {
    console.log(`server runing on http://localhost:${port}`);
})