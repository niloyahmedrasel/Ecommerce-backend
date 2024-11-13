import Joi from 'joi';

export const businessSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'Business name is required',
    'string.base': 'Business name should be a string',
  }),
  email: Joi.string().email().required().messages({
    'any.required': 'Email is required',
    'string.email': 'Email must be a valid email address',
  }),
  password: Joi.string().min(6).required().messages({
    'any.required': 'Password is required',
    'string.min': 'Password should be at least 6 characters long',
  }),
  logo: Joi.string().required().messages({
    'any.required': 'Logo URL is required',
  }),
});
