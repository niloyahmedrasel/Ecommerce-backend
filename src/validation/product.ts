import Joi from "joi";

export const productSchema = Joi.object({

  name: Joi.string().required().messages({
    "any.required": "Product name is required",
    "string.base": "Product name should be a string",
  }),

  description: Joi.string().required().messages({
    "any.required": "Product description is required",
    "string.base": "Product description should be a string",
  }),

  price: Joi.number().required().messages({
    "any.required": "Price is required",
    "number.base": "Price should be a number",
  }),

  isAvailable: Joi.boolean().default(true).messages({
    "boolean.base": "Availability should be a boolean value",
  }),

  sku: Joi.string().required().messages({
    "any.required": "SKU is required",
    "string.base": "SKU should be a string",
  }),
  stock: Joi.number().required().messages({
    "any.required": "Stock is required",
    "string.base": "stock should be a number",
  }),

  is_active: Joi.boolean().default(false).messages({
    "boolean.base": "Active status should be a boolean value",
  }),

  image: Joi.string().required().messages({
    "any.required": "Product image URL is required",
    "string.base": "Product image URL should be a string",
  }),
});
