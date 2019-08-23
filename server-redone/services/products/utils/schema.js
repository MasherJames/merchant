const productSchema = Joi.object().keys({
  name: Joi.string()
    .regex(/^[\d\w ./ \s]{2,}$/)
    .required()
    .label("Name")
    .options({
      language: {
        string: {
          regex: {
            base: "Must be greater than two characters"
          }
        }
      }
    }),
  description: Joi.string()
    .regex(/^[\d\w ./ \s]{2,}$/)
    .required()
    .label("Description")
    .options({
      language: {
        string: {
          regex: {
            base: "Must be greater than two characters"
          }
        }
      }
    }),
  price: Joi.number()
    .min(10)
    .max(100000),
  quantity: Joi.number()
    .min(0)
    .max(20),
  image: Joi.string()
});

export { productSchema };
