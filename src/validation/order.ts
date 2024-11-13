import Joi from 'joi';

export const orderSchema = Joi.object({

  products: Joi.array().items(
    Joi.object({
      product_id: Joi.string().required().messages({
        'any.required': 'Product ID is required',
        'string.base': 'Product ID should be a string',
      }),
      quantity: Joi.number().integer().min(1).required().messages({
        'any.required': 'Quantity is required',
        'number.base': 'Quantity should be a number',
        'number.min': 'Quantity should be at least 1',
      }),
      price: Joi.number().required().messages({
        'any.required': 'Price is required',
        'number.base': 'Price should be a number',
      }),
    })
  ).required().messages({
    'any.required': 'Products are required',
    'array.base': 'Products should be an array',
  }),

  total_amount: Joi.number().required().messages({
    'any.required': 'Total amount is required',
    'number.base': 'Total amount should be a number',
  }),

  customer_name: Joi.string().required().messages({
    'any.required': 'Customer name is required',
    'string.base': 'Customer name should be a string',
  }),

  customer_address: Joi.string().required().messages({
    'any.required': 'Customer address is required',
    'string.base': 'Customer address should be a string',
  }),

  customer_mobile: Joi.string().required().messages({
    'any.required': 'Customer mobile number is required',
    'string.base': 'Customer mobile number should be a string',
  }),

  status: Joi.string().valid('pending', 'completed', 'cancelled').default('pending').messages({
    'any.only': 'Status should be one of "pending", "completed", or "cancelled"',
  }),
});
