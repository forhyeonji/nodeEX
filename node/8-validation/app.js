import express from 'express';
import { body, param, validationResult } from 'express-validator';

const app = express();
app.use(express.json());

const validate = (req, res, next) => {
    const errors = validationResult(req);
        if(errors.isEmpty()){
        return next();
        }
        return res.status(400).json({ message : errors.array()[0].msg });
    }


app.post(
    '/users', 
    [
        // trim의 위치 중요! 공백을 없애고 난 후, 길이를 체크해야함.
    body("name").trim().isLength({ min:2 }).withMessage('이름은 두글자 이상!'),
    body("age").isInt().withMessage('숫자를 입력해!'),

    // normalizeEmail()은 대문자를 소문자로 바꿔준다.
    body("email").isEmail().withMessage('이메일 입력해요!').normalizeEmail(),
    body("job.name").notEmpty(),
    validate,
    ],
    (req, res, next) => {
    console.log(req.body);
    res.sendStatus(201);
    });


app.get('/:email',
    param("email").isEmail().withMessage('이메일 입력해요!'),
    validate,
    (req, res, next) => {
        res.send('🐱');
    });

app.listen(8080);