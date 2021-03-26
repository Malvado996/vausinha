const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ success: true, msg: 'Show all pantries' })
});

router.get('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Show pantry ${req.params.id}` })
});

router.post('/', (req, res) => {
    res.status(200).json({ success: true, msg: 'Create new pantry' })
});

router.put('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Update pantry ${req.params.id}` })
});

router.delete('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Delete pantry ${req.params.id}` })
});

module.exports = router;