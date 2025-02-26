import express from 'express';

const router = express.Router();
const eventController = require('../controllers/EventController');

router.post('/event/saveEvent', eventController.saveEvent);
router.put('/event/updateEvent/:id', eventController.updateEvent);
router.delete('/event/deleteEvent/:id', eventController.deleteEvent);
router.get('/event/getAllEvent', eventController.getAllEvent);

module.exports = router;