import Express, {Application, Request, Response, NextFunction} from "express";


// local imports
import config from "./config/index.js";

const app: Application = Express();

app.get("/", (req: Request, res: Response) => {
    res.send("hello")
})

app.listen(config.port, () => console.log(`Server Running at port:-> ${config.port}`))