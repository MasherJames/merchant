import jwt from 'jsonwebtoken';
const { JWT_SECRET } = process.env; 

export default (token) => new Promise((resolve, reject) => {
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if(err){
      return reject(err);
    }
    return resolve(decoded);
  });
});
