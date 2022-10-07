import { Request, Response, NextFunction } from "express";

const list = (req: Request, res: Response) => {
  res.send("fuck");
};

export default { list };
