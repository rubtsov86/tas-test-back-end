import Joi from "joi";
import mongoose from "mongoose";
import IResult from "../interfaces/IResult";

const resultSchema = new mongoose.Schema<IResult>(
  {
    title: { type: String, required: true },
    result: { type: Array, required: true },

    //         [
    //   {
    //     questionId: { type: Number, required: true },
    //     answer: { type: String, required: true },
    //     isCorrect: { type: Boolean, required: true },
    //   },
    // ],

    owner: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

// const addSchema: Joi.Schema<IResult> = Joi.object({
//   client: {
//     name: Joi.string().min(3).max(30).required(),
//     email: Joi.string()
//       .email({
//         tlds: { allow: false },
//       })
//       .required(),
//     phone: Joi.string().pattern(phoneRegexp).required(),
//     id: Joi.number(),
//   },
//   car: {
//     type: Joi.string(),
//     model: Joi.string(),
//     year: Joi.number(),
//   },
//   date: {
//     create: Date,
//     current: Date,
//   },
// });

// const updateStatusSchema: Joi.Schema<IResult> = Joi.object({
//   status: Joi.string().valid("NEW", "IN PROGRESS", "DONE", "FAILED").required(),
// });

const Result = mongoose.model<IResult>("result", resultSchema);

export { Result };
