import Joi from 'joi';

export const categorySchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'Category name is required',
    'string.base': 'Category name should be a string',
  }),
  image: Joi.string().required().messages({
    'any.required': 'Image URL is required',
  }),
});
