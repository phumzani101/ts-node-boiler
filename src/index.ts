import Express, { Application, Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import cors from "cors";
// local imports
import config from "./config/index.js";
// import routes
import routes from "./routes/index.js";

const app: Application = Express();

// load middlewares
app.use(cors());
app.use(Express.json());

// connect to mongodb
mongoose
  .connect(config.mongoURI)
  .then(() => console.log("Successfully connect to mongodb database"))
  .catch((err) =>
    console.log(`Failed to connect to mongodb :-> ${err.message}`)
  );

app.get("/", (req: Request, res: Response) => {
  res.send("hello");
});

app.use("/api/users", routes.userRouter);

app.listen(config.port, () =>
  console.log(`Server Running at port:-> ${config.port}`)
);
