const { check } = require('express-validator');

// Validating if email is empty
exports.userValidator = [
    check('email', 'User is required').not().isEmpty()
];