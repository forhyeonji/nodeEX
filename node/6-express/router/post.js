import express from 'express';

const router = express.Router();


// app-route.js 를 보면 아래는 /posts/ 이 주소이다.
router.get('/', (req, res) => {
    res.status(201).send('GET: /posts');
});

router.get('/:id', (req, res) => {
    res.status(201).send('GET: /posts/:id');
});

router.post('/', (req, res) => {
    res.status(201).send('POST: /posts');
});

router.put('/:id', (req, res) => {
    res.status(201).send('PUT: /posts/:id');
});

router.delete('/:id', (req, res) => {
    res.status(201).send('DELETE: /posts/:id');
});

export default router;