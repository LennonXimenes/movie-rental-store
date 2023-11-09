import { Request, Response } from "express";

const read = (req: Request, res: Response): Response | void => {
    return res.status(200).json({ message: "Hello World!" })
}

export { read };