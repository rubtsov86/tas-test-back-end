import { RequestHandler } from "express";

import { Result } from "../../models/result";
import IResult from "../../interfaces/IResult";
import { IRequestAfterAuth } from "../../interfaces/IRequestAfterAuth";

const addResult: RequestHandler = async (
  req: IRequestAfterAuth,
  res,
  next
): Promise<void> => {
  const newResultReq: IResult = req.body;

  const _id = req.user?._id;

  const newResult = new Result({ ...newResultReq, owner: _id });
  await newResult.save();

  res.status(201).json({
    message: `Add result with id ${newResult._id}`,
    newTask: newResult,
  });
};

export default addResult;
