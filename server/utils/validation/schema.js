import Joi from 'joi';

const userRegisterSchema = Joi.object().keys({
    email: Joi.string()
        .email({ minDomainAtoms: 2 })
        .required()
        .label('Email'),
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required()
        .label('Username'),
    password: Joi.string()
        .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[a-zA-Z\d]{8,15}$/)
        .required()
        .label('Password')
        .options({
            language:{
                string:{
                    regex:{
                        base:'Must have atleast one lowecase, uppercase and digit'
                    }
                }
            }
        })
});

const userSchemaLogin = Joi.object().keys({
    password: Joi.string()
        .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9]{8,15}$/)
        .required()
        .label('Password')
        .options({
            language:{
                string:{
                    regex:{
                        base:'Must have atleast one lowecase, uppercase, digit and special character'
                    }
                }
            }
        }),
        
    email: Joi.string()
        .email({ minDomainAtoms: 2 })
        .required()
        .label('Email'),
});

const productSchema = Joi.object().keys({
    name: Joi.string()
        .regex(/^[\d\w ./ \s]{2,}$/)
        .required()
        .label('Name')
        .options({
            language:{
                string:{
                    regex:{
                        base:'Must be greater than two characters'
                    }
                }
            }
        }),
    description: Joi.string()
        .regex(/^[\d\w ./ \s]{2,}$/)
        .required()
        .label('Description')
        .options({
            language:{
                string:{
                    regex:{
                        base:'Must be greater than two characters'
                    }
                }
            }
        }),
    price: Joi.number()
        .min(10)
        .max(100000),
    quantity: Joi.number()
        .min(0)
        .max(20)
});

export { userRegisterSchema, userSchemaLogin, productSchema };