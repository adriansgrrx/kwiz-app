import express from 'express';

const router = express.Router();

router.get("/", (req, res) => {
    res.json({message: "Welcome!"})
});

router.get("/items", (req, res) => {
    res.json({message: "You got 5 items"})
});

export default router;