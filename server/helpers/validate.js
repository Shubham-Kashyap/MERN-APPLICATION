const { body, check, validationResult } = require('express-validator');
const { ErrorResponse, SuccessResponse } = require('../utils/Response');
const { user } = require('../exports/library');

const validate = (method) => {
    switch (method) {
        case 'signup': {
            console.log('-signup case hit');
            return [
                // body('name', "name field is required").exists().isEmpty(),
                // body('email', 'Invalid email').exists().isEmail(),
                // body('phone_no').optional().isInt(),

                check('name').not()
                    .isEmpty().withMessage("Name field is required").bail(),
                check('email').not()
                    .isEmpty().withMessage("Email field is required").bail()
                    .exists().withMessage("Emial should not be empty").bail()
                    .isEmail().withMessage("Email sholud be a valid email").bail()
                    .custom(async (value) => {
                        const data = await user.findOne({ email: value });
                        if (data) {
                            return Promise.reject('E-mail already in use');
                        }
                    }).bail(),
                check('country_code').trim()
                    .optional({ checkFalsy: true })
                    .isNumeric().withMessage('Only numeric values are allowed'),

                check('phone_no').trim()
                    .optional({ checkFalsy: true })
                    .not().isEmpty().withMessage("Phone Number field is required").bail()
                    .isNumeric().withMessage('Phone number should be numeric value').bail()
                    .custom(async (value) => {
                        const data = await user.findOne({ phone_no: value });
                        if (data) {
                            return Promise.reject('Phone number already in use');
                        }
                    }).bail(),
                // body('status').optional().isIn(['enabled', 'disabled'])
            ];
        }
        case 'fetch-profile': {
            console.log('-fetch profile case hit');
            return [
                // check('user_id', "user_id field is required").exists().notEmpty().withMessage('User id field is required'),
            ];
        }
        default: {
            return []
        }

    }

}

const checkValidate = async function checkValidate(req, res, next) {
    try {

        // validate(req.originalUrl.split("/").pop())
        // validationResult(req).throw()
        const errors = await validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions
        // console.log(errors)
        if (!errors.isEmpty()) {
            console.log(errors);
            const extractedErrors = []
            errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
            return res.status(422).json({ status: false, message: errors.array()[0].msg, response: [] });
        }
        next();
    } catch (e) {
        return ErrorResponse(res, e.message, e.mapped);

    }

}



/**
 * ----------------------------------------------------------------
 * @returns  testing data only
 * ----------------------------------------------------------------
 */
const userValidationRules = () => {
    return [
        // username must be an email
        body('username').isEmail(),
        // password must be at least 5 chars long
        body('password').isLength({ min: 5 }),
    ]
}

const validate2 = async (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors)
    if (errors.isEmpty()) {
        return next()
    }
    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));
    return res.status(422).json({
        errors: extractedErrors,
        //   errors: errors.array(),
    })
}


const generateUsername = async () => {
    let nameList = [
        'Time', 'Past', 'Future', 'Dev',
        'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
        'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
        'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
        'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
        'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
        'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
        'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
        'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
        'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
        'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
        'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
        'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
        'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
        'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
        'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
        'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
        'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
        'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
        'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
        'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
    ];
    let finalName = "";
     finalName = nameList[Math.floor(Math.random() * nameList.length)];
    finalName += nameList[Math.floor(Math.random() * nameList.length)];
    if (Math.random() > 0.5) {
        finalName += nameList[Math.floor(Math.random() * nameList.length)];
    }
    return finalName;
}
module.exports = {
    userValidationRules,
    validate2,
    checkValidate,
    validate,
    validate3: (method) => [
        validate(method),
        checkValidate
    ],
    generateUsername,
}
// exports.validateRequest = [checkValidate];

