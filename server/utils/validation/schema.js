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

const propertySchema = Joi.object().keys({
    price: Joi.number()
        .min(10)
        .max(100000),
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    description: Joi.string()
        .alphanum()
        .min(3)
        .max(90)
        .required()
});

export { userRegisterSchema, userSchemaLogin, propertySchema };