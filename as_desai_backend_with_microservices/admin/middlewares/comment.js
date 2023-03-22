const { body, validationResult } = require('express-validator');

const valid_email = [ body("email").isEmail().withMessage("is not a email") ];

const validator = (req, res, next) => {
   
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() })
    }
    else {
        next();
    }
}

module.exports = {valid_email , validator}