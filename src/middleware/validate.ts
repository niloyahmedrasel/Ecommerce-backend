import { Request, Response, NextFunction, RequestHandler } from 'express';
import Joi, { Schema } from 'joi';

const validate = (schema: Schema): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      res.status(400).json({
        status: 'error',
        message: 'Validation error',
        details: error.details.map((detail) => detail.message),
      });
    } else {
      next();
    }
  };
};

export default validate;
